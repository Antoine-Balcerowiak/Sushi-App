import { TestBed } from '@angular/core/testing';

import { LookupboxesService } from './lookupboxes.service';

describe('LookupboxesService', () => {
  let service: LookupboxesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LookupboxesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
