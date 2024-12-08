import Manager from "./manager.js";
import Workout from "./workout.js";

export default class WorkoutsApp extends Manager {
    constructor({ owner, startingData, }) {
        super({ startingData, itemClass: Workout });
        if (typeof owner !== "string")
            throw new Error(
              `An app requires an owner (of type 'string'); instead received ${owner} (of type ${typeof owner})`
            );
      
          Object.defineProperty(this, "owner", { value: owner, enumerable: true });
      
          Object.freeze(this);
    }

    // Convenience Methods


    markAsDone(id) {
        super.updateItem(id, { done: true });
    }

    markAsUndone(id) {
        super.updateItem(id, { done: false });
    }

    getByTitle(title = '') {
        return super.findItemByField('title', title);
    }

    getByEquipment(equipment = '') {
        return super.findItemsByFieldInArray('equipment', equipment);
    }

    getRandom() {
        return super.findRandom();
    }

    
    showUndone(done=false) {
        return super.findItemByField('done', done);
    }

    // Aliases
    createWorkout(data) {
        return super.createItem(data);
    }

    updateWorkout(id, updates) {
        return super.updateItem(id, updates);
    }

    removeWorkout(id) {
        return super.removeItem(id);
    }

    render() {
        console.group(`${this.owner}'s Hero Workouts`);
        super.render();
        console.groupEnd();
    }
}