// Modifies existing properties in obj, and/or adds new ones.

export function modifyObject(obj, propertiesToModifyAndValues): void {
	for (let prop in propertiesToModifyAndValues) {
		obj[prop] = propertiesToModifyAndValues[prop];
	}
}
