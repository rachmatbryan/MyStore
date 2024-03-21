import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  customer: Customer = {
    fullName: '',
    address: '',
    creditCard: '',
  };
  price: number = 0;
  constructor() {}

  getCustomer(): Customer {
    return this.customer;
  }
  getPrice(): number {
    return this.price;
  }
  setCustomer(c: Customer): void {
    this.customer = c;
  }

  setPrice(p: number): void {
    this.price = p;
  }
}
