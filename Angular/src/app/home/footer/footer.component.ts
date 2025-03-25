import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  carLogos: any = [
    'Logo SVG/alfa.svg',
    'Logo SVG/bmw.svg',
    'Logo SVG/ford.svg',
    'Logo SVG/honda (1).svg',
    'Logo SVG/hyundai.svg',
    'Logo SVG/jaguar (1).svg',
    'Logo SVG/jeep.svg',
    'Logo SVG/kia.svg',
    'Logo SVG/honda.svg',
    'Logo SVG/jeep.svg',
    'Logo SVG/kia.svg',
    'Logo SVG/land.svg',
    'Logo SVG/mercedes.svg',
    'Logo SVG/mg.svg',
    'Logo SVG/nissan.svg',
    'Logo SVG/peugeot.svg',
    'Logo SVG/rover (1).svg',
    'Logo SVG/skoda.svg',
    'Logo SVG/triumph.svg',
    'Logo SVG/volkswagen.svg',
    'Logo SVG/m2.svg'
  ]
}
