import { ViewRestaurantDetailsComponent } from './components/view-restaurant-details/view-restaurant-details.component';
import { ViewNoodlesComponent } from './components/view-noodles/view-noodles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'view', component: ViewNoodlesComponent },
  { path: 'view-details/:id', component: ViewRestaurantDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
