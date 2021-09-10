import { TestBed } from '@angular/core/testing';

import { ApiRegistroServicio } from './api-registro.service';

describe('ApiRegistroServicio', () => {
  let service: ApiRegistroServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRegistroServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
