import { Directive, forwardRef, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
	selector: '[customCheckboxValues]',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CustomCheckboxValuesDirective),
			multi: true
		}
	]
})
export class CustomCheckboxValuesDirective implements ControlValueAccessor {
	private propagateChange = (_: any) => { };
	@Input() customCheckboxValues: any;
	@Input() checkedValue = true;
	@Input() uncheckedValue = false;
	@Input() indeterminateValue = false;

	constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

	@HostListener('change', ['$event'])
	onHostChange(ev) {
		this.propagateChange(ev.target.checked ? this.checkedValue : this.uncheckedValue);
	}

	writeValue(obj: any): void {
		if (obj === this.checkedValue) {
			this.renderer.setProperty(this.elementRef.nativeElement, 'checked', true);
			this.renderer.setProperty(this.elementRef.nativeElement, 'indeterminate', false);
		} else if (obj === this.indeterminateValue) {
			this.renderer.setProperty(this.elementRef.nativeElement, 'checked', false);
			this.renderer.setProperty(this.elementRef.nativeElement, 'indeterminate', true);
		} else {
			this.renderer.setProperty(this.elementRef.nativeElement, 'checked', false);
			this.renderer.setProperty(this.elementRef.nativeElement, 'indeterminate', false);
		}
	}

	registerOnChange(fn: any): void {
		this.propagateChange = fn;
	}

	registerOnTouched(fn: any): void { }

	setDisabledState?(isDisabled: boolean): void { }

}
