import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/models/Product.model';

@Component({
  selector: 'app-products-pres',
  templateUrl: './products-pres.component.html',
  styleUrls: ['./products-pres.component.scss']
})
export class ProductsPresComponent{
  @Input() 
  products: Product[] | null = [];

  @Output() addClick: EventEmitter<Product> = new EventEmitter<Product>();
  isAdded: boolean;

  onAddClick(product: Product) {
    this.addClick.emit(product);
  }
}
