import { Printable } from "./printable.js";

export function printOut(...objects: Array<Printable>) {
    for (let object of objects) {
        console.log(object.toText());
    }
}