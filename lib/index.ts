// The contents of `overwritingObject` are merged into `objectToModify`.

export function modifyObject(objectToModify, overwritingObject): void {
	// @ts-ignore
	Object.assign(objectToModify, overwritingObject);
}

/********************
Example:

let obj1 = {prop1: 10, prop2: 20, prop3: 30};
let obj2 = {prop1: 100, prop2: 200, prop10: 1000};
modifyObject(obj1, obj2);

// obj1 is now  {prop1: 100, prop2: 200, prop3: 30, prop10: 1000}
// obj2 is the same as before.
*******************/
