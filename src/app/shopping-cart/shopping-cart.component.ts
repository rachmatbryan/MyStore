import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartService } from '../service/cart.service';
import { ShoppingCartPostComponent } from '../shopping-cart-post/shopping-cart-post.component';
import { FormsModule } from '@angular/forms';
import { Customer } from '../models/Customer';
import { FormsPostComponent } from '../forms-post/forms-post.component';
import { CheckoutService } from '../service/checkout.service';

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
  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService
  ) {}
  addCustomer(c: Customer): void {
    this.customers.push(c);
    console.log(c);
    this.checkoutService.setCustomer(c);
    this.checkoutService.setPrice(this.price);
  }
  ngOnInit(): void {
    this.products = this.cartService.getCart();
    this.price = this.cartService.getPrice();
    this.selectedAmount = this.cartService.getAmount();
  }
  calculateTotalPrice(): void {
    this.price = this.products.reduce((acc, product) => {
      const quantity = this.selectedAmount[product.id];
      return acc + product.price * quantity;
    }, 0);
  }

  hidePost(p: Product): void {
    this.products = this.products.filter((x) => x.id !== p.id);
    this.calculateTotalPrice();
  }
}
