// The contents of `changes` are merged into `objectToModify`.

export function modifyObject(objectToModify, changes) {
	Object.assign(objectToModify, changes);
}
