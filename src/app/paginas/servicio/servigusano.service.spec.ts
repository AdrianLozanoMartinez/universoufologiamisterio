import { TestBed } from '@angular/core/testing';

import { ServigusanoService } from './servigusano.service';

describe('ServigusanoService', () => {
  let service: ServigusanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServigusanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
