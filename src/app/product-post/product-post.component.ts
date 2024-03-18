import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-post.component.html',
  styleUrl: './product-post.component.css',
})
export class ProductPostComponent implements OnInit {
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
