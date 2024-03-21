import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';
import { CommonModule } from '@angular/common';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-shopping-cart-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart-post.component.html',
  styleUrl: './shopping-cart-post.component.css',
})
export class ShoppingCartPostComponent implements OnInit {
  @Input() product: Product;
  @Output() marked = new EventEmitter();
  @Output() hideProduct = new EventEmitter();
  @Output() hidePost: EventEmitter<Product> = new EventEmitter();
  @Output() changePrice = new EventEmitter();
  price: number = 0;
  selectedAmount: { [key: number]: number } = {};
  constructor(private cartService: CartService) {
    this.product = {
      id: 1,
      pname: '',
      price: 1,
      url: '',
      description: '',
    };
    this.price = this.cartService.getPrice();
  }
  removeItem(p: Product): void {
    this.cartService.removeProductById(p.id);
    this.marked.emit(p);
    this.hideProduct.emit(p);
    this.hidePost.emit(p);
  }

  ngOnInit(): void {
    this.selectedAmount = this.cartService.getAmount();
  }
}
