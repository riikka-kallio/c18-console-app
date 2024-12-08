import { nanoid } from "https://esm.sh/nanoid";
import rfdc from "https://esm.sh/rfdc";
import deepmerge from "https://esm.sh/deepmerge";

const clone = rfdc({ proto: true });

export default class Manager {

  #workouts = [];

  constructor({ startingData = [], itemClass }) {
    if (!Array.isArray(startingData))
      throw new Error(
        `startingData must be an array; instead received ${startingData} (of type ${typeof startingData})`
      );

    if (typeof itemClass !== 'function')
      throw new Error(
        `itemClass must be a constructor function or class; instead received ${itemClass} (of type ${typeof itemClass})`
      );

    Object.defineProperty(this, "_id", { value: nanoid(), enumerable: true });

    Object.defineProperty(this, "itemClass", { value: itemClass });

    for (const item of startingData) {
      this.createItem(item);
    }
    // Object.freeze(this); // frozen on level above
  }

  // * Create
  createItem(data) {
    const newItem = new this.itemClass(data);
    this.#workouts = this.#workouts.toSpliced(this.#workouts.length, 0, newItem)
    return newItem._id;
  }

  // * Read

  getAll() {
    return this.#workouts
  }

  findRandom() {
    return this.#workouts[Math.floor(Math.random() * this.#workouts.length)]
  }

  findItemIdByField(field = '', value = '') {
    return this.#workouts.find((item) => {
      return item[field] === value;
    })?._id ?? null;
  }

  findItemByField(field = '', value = '') {
    return this.#workouts.find((item) => {
      return item[field] === value;
    }) ?? null;
  }

  findItemsByFieldInArray(field, value) {
    //return a list of values
    return this.#workouts.filter((item) => {
      return item[field].some(itemValue => value.includes(itemValue));
    }) ?? null;
  }

  // * Update
  updateItem(id, updates = {}) {
    console.log(`updating item with id: ${id} with`, updates);

    // Try to find where it is:
    const idx = this.#workouts.findIndex((item) => {
      return item._id === id;
    });

    // console.log("idx", idx);


    // check that we found something, if not throw an error
    if (idx === -1) {
      throw new Error(`Item with id ${id} not found`);
    }

    // Get the actual item (ready to update)
    const item = this.#workouts[idx];
    // console.log('actual item', item);


    // MERGE with updates to get new updated item
    const updatedItem = new this.itemClass(deepmerge(item, updates));
    // console.log('updated item', updatedItem);

    // Put the item back in the array (overwriting the previous)
    this.#workouts = this.#workouts.toSpliced(idx, 1, updatedItem);

    return clone(updatedItem);
  }

  // * Delete
  removeItem(id) {
    // console.log("removing id", id);

    // find where it is
    const idx = this.#workouts.findIndex(({ _id }) => {
      return _id === id;
    });

    // console.log("idx", idx);

    // check that it exists
    if (idx === -1) {
      throw new Error(`Item with id ${id} not found`);
    }

    // save the old Item to return it
    const removedItem = this.#workouts[idx];

    // recreate the array without it
    this.#workouts = this.#workouts.toSpliced(idx, 1);

    // release it from our system
    return removedItem;
  }

  // * Render => Read and print

  render(fn = Manager.consoleRender) {
    // To protect against mutating code in the passed function
    const clonedItems = clone(this.#workouts);

    // Give them a glimpse at a copy. (N.B. If they reference this and do so in a loop they risk creating a memory leak by creating too many objects)
    fn(clonedItems);
  }

  static consoleRender(items) {
    if (!items.length) return console.log('No workouts to display');
    console.table(items);
  };
}