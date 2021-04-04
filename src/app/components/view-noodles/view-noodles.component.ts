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
  public originalImageList: NoodleImage[];
  public name: string = '';
  public copyOfRestaurantList: Restaurant[];

  constructor(private fetchRestaurantService: FetchRestaurantService, private router: Router, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.fetchRestaurantService.fetchRestaurantList().subscribe((val) => {
      this.restaurantList = val;
      this.originalRestaurantList = val;
    });

    this.fetchRestaurantService.fetchImages().subscribe((val) => {
      this.imageList = val;
      this.originalImageList = val;
      setTimeout(
        () => { this.populateImages(); }, 3000);
    });
  }

  ngAfterContentInit(): void {
    this.cd.detectChanges();
  }

  goToDetails(id: number): void {
    window.open(this.router.createUrlTree(['/view-details', id]).toString(), '_blank');
  }

  getImageUrl(index) {
    if (this.imageList && this.imageList[index]) {
      return this.imageList[index].Image;
    }
  }

  sortList(key: string) {
    this.restaurantList.sort((a, b) => {
      if (isNaN(a.Stars)) {
        a.Stars = 0;
      }
      if (isNaN(b.Stars)) {
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

  populateImages() {
    for (let i = this.imageList.length; i < this.restaurantList.length; i++) {
      const index = Math.floor(Math.random() * 6) + 1;
      this.imageList.push(this.originalImageList[index]);
    }

  }
}
