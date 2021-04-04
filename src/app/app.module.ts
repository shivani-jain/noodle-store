import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewNoodlesComponent } from './components/view-noodles/view-noodles.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import { StartRatingComponent } from './components/start-rating/start-rating.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from  '@angular/common/http';
import { ViewRestaurantDetailsComponent } from './components/view-restaurant-details/view-restaurant-details.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ViewNoodlesComponent,
    StartRatingComponent,
    ViewRestaurantDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatListModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
