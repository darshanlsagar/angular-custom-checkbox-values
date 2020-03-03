# angular-custom-checkbox-values
Custom checkbox values like strings or numbers other than default boolean

## Install

```shell
$ npm i ng-custom-checkbox-values
```

## Usage

Presently works with angular reactive form components only.

Add CustomCheckboxValuesDirective to NgModule

```ts

import { CustomCheckboxValuesDirective } from "ng-custom-checkbox-values";

@NgModule({
	declarations: [
		CustomCheckboxValuesDirective,
		...
	]
	...
}

```
Provide checkedValue, uncheckedValue, indeterminateValue with formControl to checkbox field

```html
<input type="checkbox" checkedValue="Y" uncheckedValue="N" indeterminateValue="I" [formControl]="status"/>

```
OR
```html
<input type="checkbox" [checkedValue]="checkVal" [uncheckedValue]="unCheckVal" [indeterminateValue]="indetermVal" [formControl]="status"/>

```

## Author

[DarshanKumar L Sagar](https://github.com/darshanlsagar)