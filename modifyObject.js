"use strict";
// Modifies existing properties in obj, and/or adds new ones.
Object.defineProperty(exports, "__esModule", { value: true });
function modifyObject(obj, propertiesToModifyAndValues) {
    for (var prop in propertiesToModifyAndValues) {
        obj[prop] = propertiesToModifyAndValues[prop];
    }
}
exports.modifyObject = modifyObject;
