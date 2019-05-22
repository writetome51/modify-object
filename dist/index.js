"use strict";
// The contents of `overwritingObject` are merged into `objectToModify`.
Object.defineProperty(exports, "__esModule", { value: true });
function modifyObject(objectToModify, overwritingObject) {
    // @ts-ignore
    Object.assign(objectToModify, overwritingObject);
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
