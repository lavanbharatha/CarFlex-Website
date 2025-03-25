import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../car.service';
import { data } from 'jquery';




@Component({
  selector: 'app-home-details',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, NgStyle],
  templateUrl: './home-details.component.html',
  styleUrl: './home-details.component.css'
})
export class HomeDetailsComponent implements OnInit {
  carId: any
  car!: any
  carFeatures: any

  showCarousel: boolean = false
  carImages!: []
  imageIndex!: number
  showImage: boolean = false
  showMainImage:boolean=false
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private carService: CarService,

  ) { }
  ngOnInit(): void {
    this.carService.getItems()
    this.actRoute.params.subscribe(params => {
      this.carId = +Number(params['carId']);
      this.carService.getCarById(this.carId).subscribe(
        data => {
          this.car = data
          console.log(data)
        }
      )
    })
  
  }
  openImage(index: number) {
    this.imageIndex = index
    this.showImage = !this.showImage
  }
  handleMainImage() {
    this.showMainImage = !this.showMainImage
  }
  closeModal() {
    this.showImage = false
  }
  openCarousel() {
    this.showCarousel = !this.showCarousel
  }
  navigateToCarList() {
    this.router.navigate(['/home/carList'])
  }

}