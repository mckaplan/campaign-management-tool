import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/models';

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', price: 10, stock: 'In Stock', SKU: 'PM_1010', added: false },
    { id: 2, name: 'Product 2', price: 20, stock: 'In Stock', SKU: 'PM_1010', added: false },
    { id: 3, name: 'Product 3', price: 30, stock: 'In Stock', SKU: 'PM_1010', added: false },
    { id: 4, name: 'Product 4', price: 40, stock: 'In Stock', SKU: 'PM_1010', added: false },
    { id: 5, name: 'Product 5', price: 50, stock: 'In Stock', SKU: 'PM_1010', added: false }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
