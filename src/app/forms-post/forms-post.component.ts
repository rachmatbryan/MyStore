import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../models/Customer';
import { CartService } from '../service/cart.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forms-post',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './forms-post.component.html',
  styleUrl: './forms-post.component.css',
})
export class FormsPostComponent implements OnInit {
  fullName: string = '';
  address: string = '';
  creditCard: string = '';
  price: number = 0;
  @Output() addCustomer: EventEmitter<Customer> = new EventEmitter();

  constructor(private cartService: CartService, private router: Router) {}
  ngOnInit(): void {
    this.price = this.cartService.getPrice();
  }

  submitForm(): void {
    const customer = {
      fullName: this.fullName,
      address: this.address,
      creditCard: this.creditCard,
    };
    this.addCustomer.emit(customer);

    this.fullName = '';
    this.address = '';
    this.creditCard = '';
    this.router.navigate(['/checkout']);
  }
}
