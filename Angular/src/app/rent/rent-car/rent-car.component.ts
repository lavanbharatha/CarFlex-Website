import { CommonModule, NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CarService } from '../../car.service';
import { data } from 'jquery';


@Component({
  selector: 'app-rent-car',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor, RouterModule, NgClass, NgStyle, CommonModule],
  templateUrl: './rent-car.component.html',
  styleUrl: './rent-car.component.css'
})
export class RentCarComponent implements OnInit {
  rentCar: any = []
  constructor(
    private carService: CarService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.carService.getCarsByPurpose('Rent').subscribe(
      data => this.rentCar = data
    )
  }
}
