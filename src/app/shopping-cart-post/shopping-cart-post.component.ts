import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';
import { CommonModule } from '@angular/common';

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

  constructor() {
    this.product = {
      id: 1,
      pname: '',
      price: 1,
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {}
}
