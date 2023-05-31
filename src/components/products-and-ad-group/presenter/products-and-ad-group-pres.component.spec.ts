import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAndAdGroupPresComponent } from './products-and-ad-group-pres.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsPresModule } from '../subcomponent/products';

describe('ProductsAndAdGroupPresComponent', () => {
  let component: ProductsAndAdGroupPresComponent;
  let fixture: ComponentFixture<ProductsAndAdGroupPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductsAndAdGroupPresComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        BrowserAnimationsModule,
        ProductsPresModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsAndAdGroupPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a value in adProductsForm after setting a value', () => {
    const testValue = 'Test Ad Group';
    component.adProductsForm.setValue({ adGroupName: testValue });

    const formValue = component.adProductsForm.value;

    expect(formValue.adGroupName).toBe(testValue);
  });
});
