import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { ProductPostComponent } from './product-post/product-post.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { NavBarComponent } from './utilities/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    CheckoutComponent,
    HeaderComponent,
    ProductPostComponent,
    ProductListComponent,
    OrderConfirmationComponent,
    NavBarComponent,
    CommonModule,
  ],
})
export class AppComponent {
  title = 'my-app';
}
