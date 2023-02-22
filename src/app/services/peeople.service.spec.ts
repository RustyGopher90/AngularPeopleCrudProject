import { TestBed } from '@angular/core/testing';

import { PeeopleService } from './peeople.service';

describe('PeeopleService', () => {
  let service: PeeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
