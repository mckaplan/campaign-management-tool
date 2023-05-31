import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Product } from 'src/models';

@Component({
  selector: 'app-products-and-ad-group-pres',
  templateUrl: './products-and-ad-group-pres.component.html',
  styleUrls: ['./products-and-ad-group-pres.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsAndAdGroupPresComponent {
  /**
   *
   */
  adProductsForm: FormGroup;
  /**
   *
   */
  adProducts: string;

  @Input()
  products: Product[] | null = [];

  @Input()
  addedProducts: Product[] | null = [];

  @Output() formSubmit: EventEmitter<string> =
    new EventEmitter<string>();
  /**
   * Output of cancel button click to redirect previous page
   */
  @Output()
  public cancelButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  /**
   *
   */
  @Output() addClick: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private formBuilder: FormBuilder) {
    this.adProductsForm = this.formBuilder.group({
      adGroupName: new FormControl('', Validators.required),
    });
    this.adProductsForm.valueChanges.subscribe(
      (result) => (this.formSubmit.emit(result.adGroupName))
    );
  }

  /**
   *
   */
  handleFormSubmit() {
    this.formSubmit.emit(this.adProducts);
    console.log('form submitted');
  }

  /**
   *
   * @param product
   */
  onAddClick(product: any) {
    this.addClick.emit(product);
  }
}
