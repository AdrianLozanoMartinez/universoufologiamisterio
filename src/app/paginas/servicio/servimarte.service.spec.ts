import { TestBed } from '@angular/core/testing';

import { ServimarteService } from './servimarte.service';

describe('ServimarteService', () => {
  let service: ServimarteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServimarteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
