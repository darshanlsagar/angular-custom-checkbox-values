import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCheckboxValuesComponent } from './custom-checkbox-values.component';

describe('CustomCheckboxValuesComponent', () => {
  let component: CustomCheckboxValuesComponent;
  let fixture: ComponentFixture<CustomCheckboxValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCheckboxValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCheckboxValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
