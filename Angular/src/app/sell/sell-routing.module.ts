import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellCarComponent } from './sell-car/sell-car.component';

const routes: Routes = [
  {
    path:'',
    component:SellCarComponent
  },
  {
    path:'**',
    component:SellCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellRoutingModule { }
