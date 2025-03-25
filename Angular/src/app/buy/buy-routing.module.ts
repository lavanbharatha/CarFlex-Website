import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyCarComponent } from './buy-car/buy-car.component';
import { BuyDetailsComponent } from './buy-details/buy-details.component';

const routes: Routes = [
  {
    path:'',
    component:BuyCarComponent
  },
  {
    path:'buyDetails/:carId',
    component:BuyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyRoutingModule { }
