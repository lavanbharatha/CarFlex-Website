import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../car.service';


@Component({
  selector: 'app-buy-details',
  standalone: true,
  imports: [NgFor, NgClass, NgStyle],
  templateUrl: './buy-details.component.html',
  styleUrl: './buy-details.component.css'
})
export class BuyDetailsComponent {
  carId: any
  carFeatures: any
  car!: any
  showCarousel: boolean = false
  carImages!: []
  imageIndex!: number
  showImage: boolean = false
  showMainImage:boolean=false
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private carService: CarService
  ) { }
  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      this.carId = +Number(params['carId']);
      this.carService.getCarById(this.carId).subscribe(
        data => this.car = data
      )
      this.carFeatures = this.carService.getCarFeatures(this.carId)
    });
  }
  openImage(index: number) {
    this.imageIndex = index
    this.showImage = !this.showImage
  }
  handleMainImage(){
    this.showMainImage=!this.showMainImage
  }
  closeModal() {
    this.showImage = false
  }
  openCarousel() {
    this.showCarousel = !this.showCarousel
  }
}
