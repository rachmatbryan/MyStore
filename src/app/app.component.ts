import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    CheckoutComponent,
    HeaderComponent,
    ProductDetailsComponent,
    ProductListComponent,
    OrderConfirmationComponent,
  ],
})
export class AppComponent {
  title = 'my-app';
}
