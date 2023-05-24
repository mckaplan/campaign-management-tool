import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsAndAdGroupPresModule } from '../presenter/products-and-ad-group-pres.module';
import { ProductsAndAdGroupContComponent } from './products-and-ad-group-cont.component';
import { ProductsPresModule } from '../subcomponent/products';
import { SharedModule } from 'src/components/shared';

@NgModule({
  declarations: [ProductsAndAdGroupContComponent],
  imports: [
    CommonModule,
    ProductsAndAdGroupPresModule,
    ProductsPresModule,
    SharedModule
  ],
  exports: [ProductsAndAdGroupContComponent]
})
export class ProductsAndAdGroupContModule { }
