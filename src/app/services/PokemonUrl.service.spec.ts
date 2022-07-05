/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PokemonUrlService } from './PokemonUrl.service';

describe('Service: PokemonUrl', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonUrlService]
    });
  });

  it('should ...', inject([PokemonUrlService], (service: PokemonUrlService) => {
    expect(service).toBeTruthy();
  }));
});
