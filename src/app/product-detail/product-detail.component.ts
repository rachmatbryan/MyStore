import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../models/Product';
import { CommonModule } from '@angular/common';
import { CartService } from '../service/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  item: Product | undefined;
  @Input() product: Product;
  @Input() amount: number = 0;
  @Output() marked = new EventEmitter();
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.product = {
      id: 1,
      pname: '',
      price: 1,
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {
    const productId = +this.route.snapshot.params['id'];
    this.item = this.productService.getProductById(productId);
  }
  submitForm(): void {}
}
