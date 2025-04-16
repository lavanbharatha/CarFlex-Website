import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { NgIf, NgClass, NgStyle } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, NgClass, NgStyle, RouterLink, RouterLinkActive, ReactiveFormsModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  fg!: FormGroup;
  showLoginForm: boolean = false;
  isLoading: boolean = false;
  errorMessage: string | null = null;
  successMessage: string | null = null; // Add success message property

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });

    this.actRoute.queryParams.subscribe((params) => {
      this.showLoginForm = params['toLogin'] == 'true';
    });
  }

  onLogin() {
    if (this.fg.invalid) {
      this.fg.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;
    this.successMessage = null; // Reset the success message on every login attempt

    console.log('Attempting login with:', this.fg.value);

    this.http.post<{ token: string }>(
      'http://localhost:8080/api/cars/verifyUser',
      this.fg.value,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }),
        withCredentials: true
      }
    ).subscribe({
      next: (response) => {
        console.log('Login response:', response);

        if (response?.token) {
          const token = response.token;
          if (token.startsWith('eyJ')) {
            localStorage.setItem('jwtToken', token);
            this.successMessage = 'You logged in successfully!';
            setTimeout(() => {
              this.router.navigate(['/home']);
            }, 2000);
          } else {
            throw new Error('Malformed JWT token received');
          }
        } else {
          throw new Error('No token received in response');
        }
      },
      error: (error: HttpErrorResponse) => {
        console.error('Login failed:', error);
        this.handleError(error);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  private handleError(error: HttpErrorResponse | Error) {
    if (error instanceof HttpErrorResponse) {
      console.error('HTTP Error:', error.status, error.statusText);

      const serverError = error.error?.message || error.error?.error;

      switch (error.status) {
        case 0:
          this.errorMessage = 'Network error - cannot connect to server';
          break;
        case 400:
          this.errorMessage = serverError || 'Invalid request format';
          break;
        case 401:
          this.errorMessage = serverError || 'Invalid username or password';
          break;
        case 403:
          this.errorMessage = serverError || 'Access denied';
          break;
        case 404:
          this.errorMessage = 'API endpoint not found';
          break;
        case 500:
          this.errorMessage = serverError || 'Internal server error';
          break;
        default:
          this.errorMessage = `Unexpected error (${error.status})`;
      }
    } else {
      this.errorMessage = error.message || 'An unknown error occurred';
    }
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
