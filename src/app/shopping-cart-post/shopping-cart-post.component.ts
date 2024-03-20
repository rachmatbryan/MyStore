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
  selectedAmount: { [key: number]: number } = {};
  constructor(private cartService: CartService) {
    this.product = {
      id: 1,
      pname: '',
      price: 1,
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {
    this.selectedAmount = this.cartService.getAmount();
  }
}
