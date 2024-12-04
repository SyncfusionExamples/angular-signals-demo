import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Product, ProductResponse } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly httpClient = inject(HttpClient);
  private products$ = this.httpClient.get<ProductResponse>(
    'https://dummyjson.com/products?limit=8'
  );

  cartItemsList = signal<Product[]>([]);
  productList = toSignal(this.products$);

  fruitList = signal(['apple', 'orange', 'grapes']);
  fruitList$: Observable<string[]> = toObservable(this.fruitList);
}
