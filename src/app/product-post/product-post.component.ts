import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-post.component.html',
  styleUrl: './product-post.component.css',
})
export class ProductPostComponent implements OnInit {
  @Input() product: Product;
  @Output() marked = new EventEmitter();
  @Input() amount: number = 0;
  constructor(private cartService: CartService, private router: Router) {
    this.product = {
      id: 1,
      pname: '',
      price: 1,
      url: '',
      description: '',
    };
  }
  navigateToProduct(productId: number | undefined): void {
    if (productId !== undefined) {
      this.router.navigate(['/products', productId]);
    }
  }
  submitForm(): void {
    this.cartService.addAmount(this.amount, this.product);
  }
  getAmount(): number {
    return this.amount;
  }

  ngOnInit(): void {}
}
