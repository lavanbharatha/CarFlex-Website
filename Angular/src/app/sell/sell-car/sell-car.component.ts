import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-sell-car',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgStyle, NgClass, FormsModule],
  templateUrl: './sell-car.component.html',
  styleUrl: './sell-car.component.css'
})
export class SellCarComponent {

  sellDetails!: FormGroup

  showSell: boolean = false
  constructor(private fb: FormBuilder, private aRoute: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    this.sellDetails = this.fb.group(
      {
        fname: ['', [Validators.required, Validators.minLength(3)]],
        lname: ['', [Validators.required, Validators.minLength(3)]],
        hNo: ['', [, Validators.required, Validators.minLength(3)]],
        district: ['', [Validators.required, Validators.minLength(3)]],
        state: ['', [Validators.required, Validators.minLength(3)]],
        gmail: ['', [Validators.email, Validators.required, Validators.minLength(8)]],
        phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        vehAge: ['', [Validators.required, Validators.maxLength(2)]],
        price: ['', [Validators.required]],
        file: ['', [Validators.required]]
      }
    );
    this.aRoute.queryParams.subscribe((params) => {
      this.showSell = params['toSell'] === 'true';
      if (!this.showSell) {
        this.router.navigate(['/home'])
      }
    }
    )
  }
  navigateToHome() {
    this.router.navigate(['/home'])
  }
  navigateToSignUp() {

  }
}
