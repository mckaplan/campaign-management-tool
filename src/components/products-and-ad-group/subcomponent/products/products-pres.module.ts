import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPresComponent } from './products-pres.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProductsPresComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [ProductsPresComponent],
})
export class ProductsPresModule { }
