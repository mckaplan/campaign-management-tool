import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AdProducts } from 'src/models/AdProducts.model';

@Component({
  selector: 'app-products-and-ad-group-pres',
  templateUrl: './products-and-ad-group-pres.component.html',
  styleUrls: ['./products-and-ad-group-pres.component.scss'],
})
export class ProductsAndAdGroupPresComponent {
  adProductsForm: FormGroup;
  adProducts: AdProducts;

  @Output() formSubmit: EventEmitter<AdProducts> =
    new EventEmitter<AdProducts>();
  /**
   * Output of cancel button click to redirect previous page
   */
  @Output()
  public cancelButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder) {
    this.adProductsForm = this.formBuilder.group({
      adGroupName: new FormControl('', Validators.required),
    });
    this.adProductsForm.valueChanges.subscribe(
      (result) => (this.adProducts = result)
    );
  }
  handleFormSubmit() {
    this.formSubmit.emit(this.adProducts);
    console.log('form submitted');
  }
}
