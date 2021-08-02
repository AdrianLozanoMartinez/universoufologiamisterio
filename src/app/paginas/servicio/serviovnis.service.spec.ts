import { TestBed } from '@angular/core/testing';

import { ServiovnisService } from './serviovnis.service';

describe('ServiovnisService', () => {
  let service: ServiovnisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiovnisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
