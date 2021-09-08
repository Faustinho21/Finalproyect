import { TestBed } from '@angular/core/testing';

import { LockiteckService } from './lockiteck.service';

describe('LockiteckService', () => {
  let service: LockiteckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LockiteckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
