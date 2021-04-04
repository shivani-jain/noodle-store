import { TestBed } from '@angular/core/testing';

import { FetchRestaurantService } from './fetch-restaurant.service';

describe('FetchRestaurantService', () => {
  let service: FetchRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
