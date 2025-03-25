import { Routes } from '@angular/router';
import { CarHomeComponent } from './home/car-home/car-home.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home', 
        pathMatch:'full'
    },
   
    {
        path:'home',
        loadChildren:()=>import("./home/home-routing.module").then((m)=>m.HomeRoutingModule)
    },
    {
        path:'buy',
        loadChildren:()=>import("./buy/buy-routing.module").then((m)=>m.BuyRoutingModule)
    },
    {
        path:'sell',
        loadChildren:()=>import("./sell/sell-routing.module").then((m)=>m.SellRoutingModule)
    },
    {   
        path:'rent',
        loadComponent:()=>import("./rent/rent-car/rent-car.component").then((m)=>m.RentCarComponent)
    },
    {
        path:'rentDetails/:carId',
        loadComponent:()=>import("./rent/rent-details/rent-details.component").then((m)=>m.RentDetailsComponent)
    },
    {
        path:'login',
        loadChildren:()=>import("./user/user-routing.module").then((m)=>m.UserRoutingModule)
    },
  ];
