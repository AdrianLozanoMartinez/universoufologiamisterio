import { TestBed } from '@angular/core/testing';

import { ServilunaService } from './serviluna.service';

describe('ServilunaService', () => {
  let service: ServilunaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServilunaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
