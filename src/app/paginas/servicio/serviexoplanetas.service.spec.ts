import { TestBed } from '@angular/core/testing';

import { ServiexoplanetasService } from './serviexoplanetas.service';

describe('ServiexoplanetasService', () => {
  let service: ServiexoplanetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiexoplanetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
