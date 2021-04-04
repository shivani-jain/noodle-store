import { Restaurant } from './../../models/restaurant.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchRestaurantService } from 'src/app/services/fetch-restaurant.service';

@Component({
  selector: 'app-view-restaurant-details',
  templateUrl: './view-restaurant-details.component.html',
  styleUrls: ['./view-restaurant-details.component.scss']
})
export class ViewRestaurantDetailsComponent implements OnInit {

  public id: number;
  public restaurant: Restaurant;
  constructor(private route: ActivatedRoute, private fetchRestaurantService: FetchRestaurantService) { 
    this.route.params.subscribe(params => {
      this.id = +params['id'];
   });
  }

  ngOnInit(): void {
  }

}
