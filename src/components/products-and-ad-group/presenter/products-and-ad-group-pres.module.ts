import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsAndAdGroupPresComponent } from './products-and-ad-group-pres.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from 'src/components/shared';

@NgModule({
  declarations: [ProductsAndAdGroupPresComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    SharedModule
  ],
  exports: [ProductsAndAdGroupPresComponent]
})
export class ProductsAndAdGroupPresModule { }
