import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private dataUrl: string;
  constructor(private http: HttpClient) {
    this.dataUrl = '../../assets/data.json';
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl);
  }
  getProductById(id: number): Observable<Product> {
    return new Observable<Product>((observer) => {
      this.getProducts().subscribe({
        next: (products) => {
          const product = products.find((product) => product.id === id);
          if (!product) {
            observer.error(new Error(`Product with id ${id} not found.`));
          } else {
            observer.next(product);
          }
          observer.complete();
        },
        error: (err) => observer.error(err),
      });
    });
  }
}
