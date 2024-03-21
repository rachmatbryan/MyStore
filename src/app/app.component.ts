import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductPostComponent } from './product-post/product-post.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavBarComponent } from './utilities/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    CheckoutComponent,
    ProductPostComponent,
    ProductListComponent,
    NavBarComponent,
    CommonModule,
    HttpClientModule,
  ],
})
export class AppComponent {
  title = 'my-app';
}
