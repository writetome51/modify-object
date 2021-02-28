# modifyObject(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objectToModify,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;changes: object<br>): void

`changes` are merged into `objectToModify`.  
`changes` is not modified. `objectToModify` keeps its own prototype chain.


## Examples
```js
let objToModify = {prop1: 10, prop2: 20};
let changes = {prop1: 100, prop3: 30};

modifyObject(objToModify, changes);
console.log(objToModify);
// { prop1: 100, prop2: 20, prop3: 30 }

changes = {
    getSum: function () {
        return this.prop1 + this.prop2 + this.prop3;
    }
};
modifyObject(objToModify, changes);
console.log(objToModify.getSum());
// 150
```

## Installation

```bash
npm i @writetome51/modify-object
```

## Loading
```js
import {modifyObject} from '@writetome51/modify-object';
```
