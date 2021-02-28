import { modifyObject } from './index.js';



// Make sure existing properties can be overwritten and new properties can be added.

let objToModify = { prop1: 10, prop2: 20, prop3: 30 };
let changes = { prop1: 100, prop2: 200, prop10: 1000 };
modifyObject(objToModify, changes);

if (objToModify.prop1 === 100 && objToModify.prop2 === 200 &&
    objToModify.prop3 === 30 && objToModify.prop10 === 1000) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Make sure existing methods can be overwritten and new methods can be added.
objToModify = {
    prop1: 10, prop2: 20, prop3: 30,
    prop4: function () {
        return this.prop1 + 65;
    }
};
changes = {
    prop1: 100, prop10: 1000,
    prop4: function () {
        return this.prop1 + this.prop2;
    },
    prop5: function () {
        return this.prop1 + this.prop3;
    }
};
modifyObject(objToModify, changes);
if (objToModify.prop1 === 100 && objToModify.prop2 === 20 &&
    objToModify.prop3 === 30 && objToModify.prop10 === 1000 &&
    objToModify.prop4() === 120 && objToModify.prop5() === 130) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Make sure inherited properties can be overwritten and also be accessed in new methods.
export class TestClass {
    constructor() {
        this.prop1 = 1;
        this.prop2 = 2;
    }
}

export class TestSubclass extends TestClass {
    constructor() {
        super(...arguments);
        this.prop3 = this.prop1 + this.prop2; // 3
    }
}

export class TestSubSubclass extends TestSubclass {
    constructor() {
        super(...arguments);
        this.prop4 = this.prop1 + this.prop3; // 4
    }
}
objToModify = new TestSubSubclass();

changes = {
    getSumOfAll: function () {
        return this.prop1 + this.prop2 + this.prop3 + this.prop4;
    }
};
modifyObject(objToModify, changes);
if (objToModify.getSumOfAll() === 10) console.log('test 3 passed');
else console.log('test 3 FAILED');

if (objToModify instanceof TestClass) console.log('test 4 passed');
else console.log('test 4 FAILED');

if (objToModify instanceof TestSubSubclass) console.log('test 5 passed');
else console.log('test 5 FAILED');



// Even if changes has a class, objToModify should still keep its own prototype chain after being
// modified:

export class ChangesClass {
	constructor() {
		this.prop1000 = 1000;

		this.getSumOfAll = function() {
			return this.prop1 + this.prop2 + this.prop3 + this.prop4 + this.prop1000;
		}
	}
}

objToModify = new TestSubSubclass();
changes = new ChangesClass();

modifyObject(objToModify, changes);

if (objToModify instanceof TestSubSubclass) console.log('test 6 passed');
else console.log('test 6 FAILED');


if (objToModify.getSumOfAll() === 1010) console.log('test 7 passed');
else console.log('test 7 FAILED');
