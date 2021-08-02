import { TestBed } from '@angular/core/testing';

import { ServicasaService } from './servicasa.service';

describe('ServicasaService', () => {
  let service: ServicasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
