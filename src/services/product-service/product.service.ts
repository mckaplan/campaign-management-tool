import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, shareReplay } from 'rxjs';
import { Product } from 'src/models';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  /**
   * Retrieve data of products from api
   * @returns product list
   */
  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>('api/ad-group-product')
    .pipe(
      map(res=> res),
      shareReplay()
    )
  }
}
