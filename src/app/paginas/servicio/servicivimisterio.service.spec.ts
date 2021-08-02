import { TestBed } from '@angular/core/testing';

import { ServicivimisterioService } from './servicivimisterio.service';

describe('ServicivimisterioService', () => {
  let service: ServicivimisterioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicivimisterioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
