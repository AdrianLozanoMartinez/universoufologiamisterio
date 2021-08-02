import { TestBed } from '@angular/core/testing';

import { ServiarchivosService } from './serviarchivos.service';

describe('ServiarchivosService', () => {
  let service: ServiarchivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiarchivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
