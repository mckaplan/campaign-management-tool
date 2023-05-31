import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsAndAdGroupPresComponent } from './products-and-ad-group-pres.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/components/shared';
import { ProductsPresModule } from '../subcomponent/products';

@NgModule({
  declarations: [ProductsAndAdGroupPresComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ProductsPresModule,
  ],
  exports: [ProductsAndAdGroupPresComponent]
})
export class ProductsAndAdGroupPresModule { }
