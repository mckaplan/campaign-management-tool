import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-products-pres',
  templateUrl: './products-pres.component.html',
  styleUrls: ['./products-pres.component.scss'],
})
export class ProductsPresComponent {
  /**
   *
   */
  @Input()
  products: Product[] | null = [];

  /**
   *
   */
  @Input()
  title: string = '';

  /**
   *
   */
  @Output() addClick: EventEmitter<Product> = new EventEmitter<Product>();
  isAdded: boolean;

  /**
   *
   * @param product
   */
  onAddClick(product: Product) {
    this.addClick.emit(product);
  }
}
