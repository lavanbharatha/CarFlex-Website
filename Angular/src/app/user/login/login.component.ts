import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, NgClass, NgStyle, RouterLink, RouterLinkActive, ReactiveFormsModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  fg!: FormGroup;
  username:string=''
  showLoginForm: boolean = false
  showSignUpForm: boolean = false
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute,
    ) {

  }
  ngOnInit(): void {
    this.fg = this.fb.group(
      {
        gmail: ['', [Validators.email, Validators.required, Validators.minLength(8)]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      }
    )
    this.actRoute.queryParams.subscribe((params) => {
      this.showLoginForm = params['toLogin'] == 'true';
      if (!this.showLoginForm) {
        this.router.navigate(['/buy'])
      }
    })
  
  }
 
  navigateToHome() {
    this.showLoginForm = false
    this.router.navigate(['/home'])
  }

}

