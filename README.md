# modifyObject(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objectToModify,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;changes<br>): void

`changes` are merged into `objectToModify`.  
`changes` is not modified.


## Examples
```ts
let objToModify = {prop1: 10, prop2: 20};
let changes = {prop1: 100, prop3: 30};
modifyObject(objToModify, changes);

// objToModify is now  {prop1: 100, prop2: 20, prop3: 30}

changes = {
    getSum: function () {
        return this.prop1 + this.prop2 + this.prop3;
    }
};
modifyObject(objToModify, changes);

objToModify.getSum();
// --> 150
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
