import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPresComponent } from './products-pres.component';
import { SharedModule } from 'src/components/shared';

@NgModule({
  declarations: [ProductsPresComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ProductsPresComponent],
})
export class ProductsPresModule { }
