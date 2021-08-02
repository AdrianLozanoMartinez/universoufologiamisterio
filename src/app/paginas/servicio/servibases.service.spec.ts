import { TestBed } from '@angular/core/testing';

import { ServibasesService } from './servibases.service';

describe('ServibasesService', () => {
  let service: ServibasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServibasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
