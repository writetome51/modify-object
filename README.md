# modifyObject(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objectToModify,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;overwritingObject<br>): void

The contents of `overwritingObject` are merged into `objectToModify`.


## Examples
```
let objToModify = {prop1: 10, prop2: 20, prop3: 30};
let changes = {prop1: 100, prop2: 200, prop4: 1000};
modifyObject(objToModify, changes);

// objToModify is now  {prop1: 100, prop2: 200, prop3: 30, prop4: 1000}

let objToModify = {
	prop1: function(){return 1;},  
	prop2: function(){return 'hello';}
};
let changes = {
    prop1: function(){return 'blah';}
};
modifyObject(objToModify, changes);

/*****************
objToModify is now  {
	prop1: function(){return 'blah';},  
	prop2: function(){return 'hello';}
}
****************/
```

## Installation

```bash
npm i  @writetome51/merge-objects
```

## Loading
```
// If using TypeScript:
import {modifyObject} from '@writetome51/merge-objects';
// If using ES5 JavaScript:
var modifyObject = require('@writetome51/merge-objects').modifyObject;
```
