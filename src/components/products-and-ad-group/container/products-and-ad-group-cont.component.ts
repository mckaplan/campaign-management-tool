import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AdProducts } from 'src/models/AdProducts.model';
import { Product } from 'src/models/Product.model';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-products-and-ad-group-cont',
  templateUrl: './products-and-ad-group-cont.component.html',
  styleUrls: ['./products-and-ad-group-cont.component.scss']
})
export class ProductsAndAdGroupContComponent implements OnInit {
  adProducts: AdProducts = {
    adGroupName: '',
  };
  products:  Observable<Product[]>;

  addClick$ = new Subject<Product>();
  

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();

    this.addClick$.subscribe(product => console.log(product.name + ' added'))
  }

  onFormSubmit(formData: any) {
    console.log('Container is called')
    console.log(formData);
  }

  onAddClick(product: Product) {
    product.added = !product.added;
    
    if(product.added) {
      this.addClick$.next(product);
    } else {
      console.log(product.name + ' removed')
    }
  }

  /**
   * redirect to next page
   * @param e event value
   */
  public continueButton(e: any) {
    console.log('Container is called')
    console.log(e);
  }

  /**
   * redirect to previous page
   * @param e event value
   */
  public cancelButton(e: any) {

  }
}
