import { nanoid } from "https://esm.sh/nanoid";

// Type
export default class Workout {

    constructor({ title, type, equipment, exercises, done = false, _id = nanoid(5) } = {}) {

        // Defensive checks

        if(typeof _id !== 'string') throw new Error(`A passed _id must be a string`);

        if (typeof title !== "string") throw new Error(
            `A workout app requires a title (of type 'string'); instead received ${title} (of type ${typeof title})`
        );

        if (!title.length) throw new Error(
            `title cannot be an empty string`
        );

        if (typeof done !== "boolean")
            throw new Error(
                `A workout app requires a done (of type 'boolean'); instead received ${done} (of type ${typeof done})`
            );

        if (!Array.isArray(equipment))
            throw new Error(
                `equipment must be provided as an array`
            );

            if (!Array.isArray(exercises))
                throw new Error(
                    `exercises must be provided as an array`
                );

        this._id = _id;

        this.title = title;
        this.type = type;
        this.equipment = equipment;
        this.exercises = exercises;
        this.done = done;
    }
}