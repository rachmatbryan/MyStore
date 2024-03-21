import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';
import { CheckoutService } from '../service/checkout.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  constructor(private checkoutService: CheckoutService) {}

  customer: Customer = {
    fullName: '',
    address: '',
    creditCard: '',
  };
  price: number = 0;
  ngOnInit(): void {
    this.customer = this.checkoutService.getCustomer();
    this.price = this.checkoutService.getPrice();
  }
}
