import { TestBed } from '@angular/core/testing';

import { CustomCheckboxValuesService } from './custom-checkbox-values.service';

describe('CustomCheckboxValuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomCheckboxValuesService = TestBed.get(CustomCheckboxValuesService);
    expect(service).toBeTruthy();
  });
});
