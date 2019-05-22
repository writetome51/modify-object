# modifyObject(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objectToModify,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;overwritingObject<br>): void

The contents of `overwritingObject` are merged into `objectToModify`.


## Examples
```ts
let objToModify = {prop1: 10, prop2: 20, prop3: 30};
let changes = {prop1: 100, prop2: 200, prop4: 1000};
modifyObject(objToModify, changes);

// objToModify is now  {prop1: 100, prop2: 200, prop3: 30, prop4: 1000}

objToModify = {
    prop1: 10, prop2: 20, prop3: 30
};
changes = {
    prop1: 100, prop2: 200, prop4: 1000,
    prop5: function () {
        return this.prop1 + this.prop3;
    }
};
modifyObject(objToModify, changes);

console.log(objToModify.prop5());
// console: '130'
```

## Installation

```bash
npm i  @writetome51/modify-object
```

## Loading
```ts
// If using TypeScript:
import {modifyObject} from '@writetome51/modify-object';
// If using ES5 JavaScript:
var modifyObject = require('@writetome51/modify-object').modifyObject;
```
