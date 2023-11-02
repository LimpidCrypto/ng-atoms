import { TestBed } from '@angular/core/testing';

import { NgAtomsService } from './ng-atoms.service';

describe('NgAtomsService', () => {
  let service: NgAtomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgAtomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
