import { TestBed } from '@angular/core/testing';

import { ServiabduccionesService } from './serviabducciones.service';

describe('ServiabduccionesService', () => {
  let service: ServiabduccionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiabduccionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
