import { TestBed } from '@angular/core/testing';

import { ServiespirituService } from './serviespiritu.service';

describe('ServiespirituService', () => {
  let service: ServiespirituService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiespirituService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
