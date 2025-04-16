import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor(private actRoute: ActivatedRoute) { }
  onPaymentMethodChange(event: any) {
    const paymentMethods = ['upiDetails', 'creditCardDetails', 'paypalDetails'];
    paymentMethods.forEach(method => {
      const element = document.getElementById(method);
      if (element) {
        element.style.display = 'none';
      }
    });
    const selectedMethod = event.target.value + 'Details';
    const selectedElement = document.getElementById(selectedMethod);
    if (selectedElement) {
      selectedElement.style.display = 'block';
    }
  }
}
