import { TestBed } from '@angular/core/testing';

import { CursoListaService } from './curso-lista.service';

describe('CursoListaService', () => {
  let service: CursoListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
