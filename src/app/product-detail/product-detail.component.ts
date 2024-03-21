import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../models/Product';
import { CommonModule } from '@angular/common';
import { CartService } from '../service/cart.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, HttpClientModule],
  providers: [ProductService],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  item: Product = {
    id: 0,
    pname: '',
    price: 0,
    url: '',
    description: '',
  };

  amount: number = 0;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const productId = +this.route.snapshot.params['id'];
    if (productId) {
      this.productService.getProductById(productId).subscribe({
        next: (data) => {
          this.item = data;
        },
        error: (err) => {
          console.error('Failed to load product', err);
        },
      });
    }
  }
  submitForm(): void {
    if (this.item) {
      this.cartService.addToCart(this.item);
      this.cartService.addAmount(this.amount, this.item);
    }
  }
}
