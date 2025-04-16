import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../car.service';
import { AuthenticationService } from '../../authentication.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { credInterceptor } from '../../cred.interceptor';


@Component({
  selector: 'app-buy-details',
  standalone: true,
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useValue: credInterceptor,
      multi: true,
    },
  ],
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
  handleMainImage() {
    this.showMainImage = !this.showMainImage
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

