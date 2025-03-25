import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [NgClass, NgIf, NgStyle, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  signUp!: FormGroup;
  showSignUp: boolean = false
  constructor(
    private fb: FormBuilder,
    private aRoute: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.signUp = this.fb.group(
      {
        fname: ['', [Validators.required, Validators.minLength(3)]],
        lname: ['', [Validators.required, Validators.minLength(3)]],
        city: ['', [, Validators.required, Validators.minLength(3)]],
        state: ['', [Validators.required, Validators.minLength(3)]],
        pNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        signGmail: ['', [Validators.email, Validators.required, Validators.minLength(7)]],
      }
    )
    this.aRoute.queryParams.subscribe((params) => {
      this.showSignUp = params['toSignUp'] === 'true';

    }

    )
  }
  navigateToLogin() {
    this.router.navigate(['/login'], { queryParams: { toLogin: true } })
  }

}
