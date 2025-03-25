import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CarService } from '../../car.service';


@Component({
  selector: 'app-buy-car',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgFor, NgClass, NgStyle],
  templateUrl: './buy-car.component.html',
  styleUrl: './buy-car.component.css'
})
export class BuyCarComponent implements OnInit {
  buyCars: any = []
  constructor(
    private router: Router,
    private carService: CarService
  ) {

  }

  ngOnInit(): void {
    this.carService.getCarsByPurpose('Buy').subscribe(
      data => this.buyCars = data
    );
  }
  navigateToSignUp() {
    this.router.navigate(['login'], { queryParams: { toLogin: true } })
  }
}
