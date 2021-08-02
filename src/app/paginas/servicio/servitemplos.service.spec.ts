import { TestBed } from '@angular/core/testing';

import { ServitemplosService } from './servitemplos.service';

describe('ServitemplosService', () => {
  let service: ServitemplosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServitemplosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
