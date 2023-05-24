import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/models';
import { AdProducts } from 'src/models/adProducts.model';
import { ProductService } from 'src/services';

@Component({
  selector: 'app-products-and-ad-group-cont',
  templateUrl: './products-and-ad-group-cont.component.html',
  styleUrls: ['./products-and-ad-group-cont.component.scss'],
})
export class ProductsAndAdGroupContComponent implements OnInit {
  adProducts: AdProducts = {
    adGroupName: '',
  };
  productsSubject = new BehaviorSubject<Product[]>([]);
  products: Observable<Product[]> = this.productsSubject.asObservable();

  addedProductsSubject = new BehaviorSubject<Product[]>([]);
  addedProducts: Observable<Product[]> = 
    this.addedProductsSubject.asObservable();

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productsSubject.next(this.productService.getProducts());
  }

  onFormSubmit(formData: any) {
    console.log('Container is called');
    console.log(formData);
  }

  onAddClick(product: Product) {
    const addedList = this.addedProductsSubject.value;
    const productList = this.productsSubject.value;
    const index = productList.findIndex((x) => x.id === product.id);
  
    if (product.added) {
      addedList.splice(addedList.findIndex((x) => x.id === product.id), 1);
      productList.push(product);
    } else {
      productList.splice(index, 1);
      addedList.push(product);
    }
  
    product.added = !product.added;
    this.addedProductsSubject.next(addedList);
    this.productsSubject.next(productList);
  }

  /**
   * redirect to next page
   * @param e event value
   */
  public continueButton(e: any) {
    console.log('Container is called');
    console.log(e);
  }

  /**
   * redirect to previous page
   * @param e event value
   */
  public cancelButton(e: any) {}
}
