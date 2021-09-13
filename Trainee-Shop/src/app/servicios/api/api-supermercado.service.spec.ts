import { TestBed } from '@angular/core/testing';

import { ApiSupermercadoService } from './api-supermercado.service';

describe('ApiSupermercadoService', () => {
  let service: ApiSupermercadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSupermercadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
