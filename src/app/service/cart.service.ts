import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productList: Product[] = [];
  price: number = 0;
  selectedAmount: { [key: number]: number } = {};

  constructor() {}

  getCart() {
    return this.productList;
  }

  addToCart(product: Product) {
    this.productList.push(product);

    return this.productList;
  }

  addAmount(n: number, product: Product) {
    if (!this.selectedAmount[product.id]) {
      this.selectedAmount[product.id] = 0;
    }

    const amountToAdd = parseInt(n.toString());

    this.selectedAmount[product.id] += amountToAdd;

    const quantity = this.selectedAmount[product.id] || 1;

    this.price += product.price * quantity;
    console.log(this.selectedAmount);
  }

  getAmount(): { [key: number]: number } {
    return this.selectedAmount;
  }
  getPrice(): number {
    return this.price;
  }

  clearCart() {
    this.productList = [];
    return this.productList;
  }
}
