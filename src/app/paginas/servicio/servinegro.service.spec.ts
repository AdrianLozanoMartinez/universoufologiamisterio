import { TestBed } from '@angular/core/testing';

import { ServinegroService } from './servinegro.service';

describe('ServinegroService', () => {
  let service: ServinegroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServinegroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
