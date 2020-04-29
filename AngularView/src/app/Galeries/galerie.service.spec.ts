import { TestBed } from '@angular/core/testing';

import { GaleriesService } from './galeries.service';

describe('GalerieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GaleriesService = TestBed.get(GaleriesService);
    expect(service).toBeTruthy();
  });
});
