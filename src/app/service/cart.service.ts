import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productList: Product[] = [];
  cartNum: number = 0;
  constructor() {}

  getCart() {
    return this.productList;
  }

  addToCart(product: Product) {
    this.cartNum += 1;
    this.productList.push(product);
    return this.productList;
  }

  clearCart() {
    this.productList = [];
    return this.productList;
  }
}
