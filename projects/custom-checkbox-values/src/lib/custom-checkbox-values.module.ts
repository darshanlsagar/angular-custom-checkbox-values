import { NgModule } from '@angular/core';
import { CustomCheckboxValuesComponent } from './custom-checkbox-values.component';
import { CustomCheckboxValuesDirective } from './custom-checkbox-values.directive';



@NgModule({
  declarations: [CustomCheckboxValuesComponent, CustomCheckboxValuesDirective],
  imports: [
  ],
  exports: [CustomCheckboxValuesComponent, CustomCheckboxValuesDirective]
})
export class CustomCheckboxValuesModule { }
