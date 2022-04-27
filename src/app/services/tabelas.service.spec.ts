import { TestBed } from '@angular/core/testing';

import { TabelasService } from './tabelas.service';

describe('TabelasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabelasService = TestBed.get(TabelasService);
    expect(service).toBeTruthy();
  });
});
