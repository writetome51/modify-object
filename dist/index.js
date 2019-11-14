"use strict";
// The contents of `changes` are merged into `objectToModify`.
Object.defineProperty(exports, "__esModule", { value: true });
function modifyObject(objectToModify, changes) {
    // @ts-ignore
    Object.assign(objectToModify, changes);
}
exports.modifyObject = modifyObject;
/********************
Example:

let obj1 = {prop1: 10, prop2: 20, prop3: 30};
let obj2 = {prop1: 100, prop2: 200, prop10: 1000};
modifyObject(obj1, obj2);

// obj1 is now  {prop1: 100, prop2: 200, prop3: 30, prop10: 1000}
// obj2 is the same as before.
*******************/
