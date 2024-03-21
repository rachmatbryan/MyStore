import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../models/Product';
import { CommonModule } from '@angular/common';
import { ProductPostComponent } from '../product-post/product-post.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartService } from '../service/cart.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [CommonModule, ProductPostComponent, FlexLayoutModule, FormsModule],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  addToCart(p: Product): void {
    this.cartService.addToCart(p);
  }
}
