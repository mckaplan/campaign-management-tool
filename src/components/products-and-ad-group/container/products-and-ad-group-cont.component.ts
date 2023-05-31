import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subscription, filter, map, take } from 'rxjs';
import { AdGroupAndProducts, Product } from 'src/models';
import { getAdGroupProducts, selectAllAdGroupProducts, setAdGroupAndProducts } from 'src/store';

@Component({
  selector: 'app-products-and-ad-group-cont',
  templateUrl: './products-and-ad-group-cont.component.html',
  styleUrls: ['./products-and-ad-group-cont.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsAndAdGroupContComponent implements OnInit, OnDestroy {
  /**
   *
   */
  adGroupName: string = '';

  /**
   *
   */
  productsSubject = new BehaviorSubject<Product[]>([]);

  /**
   *
   */
  products: Observable<Product[]> = this.productsSubject.asObservable();

  /**
   *
   */
  addedProductsSubject = new BehaviorSubject<Product[]>([]);

  /**
   *
   */
  addedProducts: Observable<Product[]> = this.addedProductsSubject.asObservable();

  /**
   * List of subscriptions to unsubscribe on destroy
   */
  private subscriptions: Subscription[] = [];

  constructor(private readonly store: Store) {
    this.store.dispatch(getAdGroupProducts());

    this.subscriptions.push(
      this.store.select(selectAllAdGroupProducts)
        .pipe(
          filter((val) => !!val.adGroupProducts && val.adGroupProducts?.length > 0),
          map((val) => val.adGroupProducts),
          take(1)
        )
        .subscribe((adGroupProducts) => {
          this.productsSubject.next(adGroupProducts!);
        })
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  /**
   *
   * @param formData
   */
  onFormSubmit(formData: any) {
    this.adGroupName = formData;
  }

  /**
   *
   * @param product
   */
  onAddClick(obj: Product) {
    const addedList = this.cloneObjList(this.addedProductsSubject.value);
    const productList = this.cloneObjList(this.productsSubject.value);
    const index = productList.findIndex((x) => x.id === obj.id);
    let product = Object.assign({}, obj);

    if (product.added) {
      product.added = false;
      addedList.splice(addedList.findIndex((x) => x.id === product.id), 1);
      productList.push(product);
    } else {
      product.added = true;
      productList.splice(index, 1);
      addedList.push(product);
    }

    this.addedProductsSubject.next(addedList);
    this.productsSubject.next(productList);
  }

  /**
   * redirect to next page
   * @param e event value
   */
  public continueButton(e: any) {
    const adGroupAndProducts: AdGroupAndProducts = {
      adGroupName: this.adGroupName,
      products: this.addedProductsSubject.value
    };

    if (adGroupAndProducts.adGroupName.length && adGroupAndProducts.products.length) {
      this.store.dispatch(setAdGroupAndProducts({ adGroupAndProducts }));
    }
  }

  /**
   * redirect to previous page
   * @param e event value
   */
  public cancelButton(e: any) {

  }

  /**
   * Clone existed obj to remove ready-only rights
   * @param list value of obj list
   * @returns cloned obj array
   */
  private cloneObjList(list: any) {
    let arr: any[] = [];

    list.forEach((val: any) => {
      let obj = Object.assign({}, val);
      arr.push(obj);
    });

    return arr;
  }
}
