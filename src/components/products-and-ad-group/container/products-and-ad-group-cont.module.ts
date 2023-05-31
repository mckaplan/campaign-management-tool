import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsAndAdGroupPresModule } from '../presenter/products-and-ad-group-pres.module';
import { ProductsAndAdGroupContComponent } from './products-and-ad-group-cont.component';
import { SharedModule } from 'src/components/shared';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductsAndAdGroupContComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProductsAndAdGroupContComponent
      }
    ]),
    CommonModule,
    SharedModule,
    ProductsAndAdGroupPresModule
  ],
  exports: [
    ProductsAndAdGroupContComponent,
    RouterModule
  ]
})
export class ProductsAndAdGroupContModule { }
