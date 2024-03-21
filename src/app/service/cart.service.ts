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

  getCart(): Product[] {
    return this.productList;
  }

  addToCart(product: Product) {
    this.productList.push(product);
    console.log(
      product.pname + product.id + product.description,
      product.price
    );
    alert(product.pname + ' Has been added to the cart');
    return this.productList;
  }
  removeProductById(productId: number): void {
    const product = this.productList.find((p) => p.id === productId);

    this.productList = this.productList.filter((p) => p.id !== productId);

    if (product && this.selectedAmount[productId]) {
      this.price -= this.selectedAmount[productId] * product.price;

      delete this.selectedAmount[productId];
    }
    console.log(this.productList);
    console.log(this.price);
  }
  addAmount(n: number, product: Product) {
    if (!this.selectedAmount[product.id]) {
      this.selectedAmount[product.id] = 0;
    }

    const amountToAdd = parseInt(n.toString()) || 1;

    this.selectedAmount[product.id] += amountToAdd;

    const quantity = this.selectedAmount[product.id] || 1;

    this.price += product.price * quantity;
    console.log(this.selectedAmount);
    console.log(this.productList);
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
