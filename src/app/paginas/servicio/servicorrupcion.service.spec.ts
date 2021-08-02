import { TestBed } from '@angular/core/testing';

import { ServicorrupcionService } from './servicorrupcion.service';

describe('ServicorrupcionService', () => {
  let service: ServicorrupcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicorrupcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
