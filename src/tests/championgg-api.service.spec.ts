/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChampionggApiService } from '../app/api-services/championgg-api.service';

describe('ChampionggApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChampionggApiService]
    });
  });

  it('should ...', inject([ChampionggApiService], (service: ChampionggApiService) => {
    expect(service).toBeTruthy();
  }));
});
