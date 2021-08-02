import { TestBed } from '@angular/core/testing';

import { ServiiluminatisService } from './serviiluminatis.service';

describe('ServiiluminatisService', () => {
  let service: ServiiluminatisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiiluminatisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
