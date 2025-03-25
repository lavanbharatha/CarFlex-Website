import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CarService } from '../../car.service';
import { Car } from '../../model/Car.model';
@Component({
  selector: 'app-car-home',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './car-home.component.html',
  styleUrl: './car-home.component.css'
})
export class CarHomeComponent {

  eachCar: Car[] = []
  constructor(
    private router: Router,
    private matDialog: MatDialog,
    private carService: CarService
  ) { }

  ngOnInit(): void {
    this.carService.getItems()
    this.carService.cars$.subscribe(data => {
      this.eachCar = data;
    });
  }
}
