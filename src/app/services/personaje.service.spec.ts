import { TestBed } from '@angular/core/testing';

import { HeroesService } from './personajes.service';

describe('GiftsService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
