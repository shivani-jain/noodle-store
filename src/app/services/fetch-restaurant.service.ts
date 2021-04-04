import { Restaurant } from './../models/restaurant.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoodleImage } from '../models/noodle-image.model';

@Injectable({
  providedIn: 'root'
})
export class FetchRestaurantService {

  constructor(private http: HttpClient) { }

  fetchRestaurantList() {
    return this.http.get<Restaurant[]> ('https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json');
  }

  fetchImages() {
    return this.http.get<NoodleImage[]>('https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json');
  }

  getRestaurant(index: number) {
    let restaurantList: Restaurant[]
    return this.fetchRestaurantList().subscribe((val) => {
      restaurantList = val;
      return restaurantList[index];
    });

    
  }
}
