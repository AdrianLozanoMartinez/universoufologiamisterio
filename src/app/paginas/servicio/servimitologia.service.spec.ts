import { TestBed } from '@angular/core/testing';

import { ServimitologiaService } from './servimitologia.service';

describe('ServimitologiaService', () => {
  let service: ServimitologiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServimitologiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
