import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartService } from '../service/cart.service';
import { ShoppingCartPostComponent } from '../shopping-cart-post/shopping-cart-post.component';
import { FormsModule } from '@angular/forms';
import { Customer } from '../models/Customer';
import { FormsPostComponent } from '../forms-post/forms-post.component';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
  imports: [
    CommonModule,
    ShoppingCartPostComponent,
    FlexLayoutModule,
    FormsPostComponent,
  ],
})
export class ShoppingCartComponent implements OnInit {
  products: Product[] = [];
  customers: Customer[] = [];

  price: number = 0;
  selectedAmount: { [key: number]: number } = {};
  constructor(private cartService: CartService) {}
  addCustomer(c: Customer): void {
    this.customers.push(c);
    console.log(c);
  }
  ngOnInit(): void {
    this.products = this.cartService.getCart();
    this.price = this.cartService.getPrice();
    this.selectedAmount = this.cartService.getAmount();
  }
}
