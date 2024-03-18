import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartService } from '../service/cart.service';
import { ShoppingCartPostComponent } from '../shopping-cart-post/shopping-cart-post.component';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, ShoppingCartPostComponent, FlexLayoutModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent implements OnInit {
  products: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.getCart();
  }
}
