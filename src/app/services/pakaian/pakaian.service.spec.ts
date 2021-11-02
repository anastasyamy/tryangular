import { TestBed } from '@angular/core/testing';

import { PakaianService } from './pakaian.service';

describe('PakaianService', () => {
  let service: PakaianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PakaianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
