import { NgClass, NgStyle } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgStyle, RouterLink, RouterLinkActive, RouterOutlet, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  bootstrap: any
  modalElement: any

  isNavbarCollapsed: boolean = false
  constructor
  (private router: Router) { }
 
  toggleNavbar(){
    this.isNavbarCollapsed=false
  }


}
