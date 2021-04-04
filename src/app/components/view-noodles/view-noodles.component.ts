import { Restaurant } from './../../models/restaurant.model';
import { Component, OnInit, ChangeDetectorRef, AfterContentInit } from '@angular/core';
import { FetchRestaurantService } from 'src/app/services/fetch-restaurant.service';
import { Router } from '@angular/router';
import { NoodleImage } from 'src/app/models/noodle-image.model';

@Component({
  selector: 'app-view-noodles',
  templateUrl: './view-noodles.component.html',
  styleUrls: ['./view-noodles.component.scss']
})
export class ViewNoodlesComponent implements OnInit, AfterContentInit {

  public restaurantList: Restaurant[];
  public originalRestaurantList: Restaurant[];
  public imageList: NoodleImage[];
  public name: string = '';
  public copyOfRestaurantList: Restaurant[];

  constructor(private fetchRestaurantService: FetchRestaurantService, private router: Router, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    
    this.fetchRestaurantService.fetch().subscribe((val) => {
      this.restaurantList = val;
      this.originalRestaurantList = val;
    });

    this.fetchRestaurantService.fetchImages().subscribe((val) => {
      this.imageList = val;
    });
    

  }

  ngAfterContentInit(): void {
    this.cd.detectChanges();
  }

  goToDetails(id: number): void {
    window.open(this.router.createUrlTree(['/view-details', id]).toString(), '_blank');
  }

  getImageUrl() {
    if (this.imageList) {
      return this.imageList[0].Image;
    }
  }

  sortList(key: string) {
    this.restaurantList.sort((a, b) => {
      if (isNaN(a.Stars)) {
        a.Stars = 0;
      }
      if(isNaN(b.Stars)) {
        b.Stars = 0;
      }
      return key === 'ASC' ? a.Stars - b.Stars : b.Stars - a.Stars
    });
  }

  filterList() {
    this.restaurantList = this.originalRestaurantList.filter((el) => {
        return el.Brand.toLowerCase().indexOf(this.name.toLowerCase()) !== -1 ||
        el.Variety.toLowerCase().indexOf(this.name.toLowerCase()) !== -1 ||
        el.Style.toLowerCase().indexOf(this.name.toLowerCase()) !== -1 ||
        el.Country.toLowerCase().indexOf(this.name.toLowerCase()) !== -1
    });
  }

}
