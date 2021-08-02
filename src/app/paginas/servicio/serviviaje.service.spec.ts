import { TestBed } from '@angular/core/testing';

import { ServiviajeService } from './serviviaje.service';

describe('ServiviajeService', () => {
  let service: ServiviajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiviajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
