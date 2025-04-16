import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { User } from '../../model/User.model';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [NgClass, NgIf, NgStyle, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {

  signUp!: FormGroup;
  showSignUp: boolean = false;
  successMessage: string = ''; 

  constructor(
    private fb: FormBuilder,
    private aRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.signUp = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      pNumber: ['', [Validators.required, this.phoneNumberValidator()]],
      signGmail: ['', [Validators.required, Validators.email, this.gmailValidator()]],
    });
    this.aRoute.queryParams.subscribe((params) => {
      this.showSignUp = params['toSignUp'] === 'true';
    });
  }

  phoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const isValid = /^[0-9]{10}$/.test(value); 
      return isValid ? null : { invalidPhoneNumber: true };
    };
  }

  gmailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const isValid = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value); 
      return isValid ? null : { invalidGmail: true };
    };
  }

  onSubmit(): void {
    if (this.signUp.valid) {
      const user: User = this.signUp.value;
      this.userService.createUser(user).subscribe({
        next: (response) => {
          console.log('User created successfully:', response);
          this.successMessage = 'User registered successfully!'; 
          this.signUp.reset(); 
          this.showSignUp = true; 
        },
        error: (error) => {
          console.error('Error creating user:', error);
          this.successMessage = 'Failed to register user. Please try again.';
        },
      });
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login'], { queryParams: { toLogin: true } });
  }
  navigateToLoginComponent() {
    this.router.navigate(['/login'], { queryParams: { toLogin: true } });
  }
}
