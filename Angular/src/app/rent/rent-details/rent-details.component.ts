import { CommonModule, NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../car.service';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-rent-details',
  standalone: true,
  imports: [NgStyle, NgClass, NgFor, CommonModule],
  templateUrl: './rent-details.component.html',
  styleUrl: './rent-details.component.css'
})
export class RentDetailsComponent implements OnInit {
  carId: any
  car!: any
  showCarousel: boolean = false
  carImages!: []
  imageIndex!: number
  showImage: boolean = false
  carFeatures: any
  showMainImage: boolean = false
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private carService: CarService,
    private authService: AuthenticationService
  ) { }
  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      this.carId = +Number(params['carId']);
      this.car = this.carService.getCarById(this.carId)
      this.carService.getCarById(this.carId).subscribe(
        data => this.car = data
      )
      this.carFeatures = this.carService.getCarFeatures(this.carId)
    });
  }
  handleMainImage() {
    this.showMainImage = !this.showMainImage
  }
  openImage(index: number) {
    this.imageIndex = index
    this.showImage = !this.showImage
  }
  closeModal() {
    this.showImage = false
  }
  openCarousel() {
    this.showCarousel = !this.showCarousel
  }
  goToLogin() {
    if (!this.authService.isTokenPresent()) {
      this.router.navigate(['/login'], { queryParams: { toLogin: true } });
         }
    this.authService.verifyToken().subscribe({
      next: (res) => {
        this.router.navigate(['/login/payment']);
      },
      error: (err) => {
        if (err.status === 401) {
          // Token expired or invalid
          console.log('Session expired. Please login again.');
        } else {
          // Other errors (like network issues, etc.)
          alert('An error occurred. Please try again.');
        }
        this.router.navigate(['/login'], { queryParams: { toLogin: true } });
      }
    });
  }
}
