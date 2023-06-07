import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAndAdGroupContComponent } from './products-and-ad-group-cont.component';
import { ProductsAndAdGroupPresModule } from '../presenter/products-and-ad-group-pres.module';
import { SharedModule } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Product } from 'src/models';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectAllAdGroupProducts, setAdGroupAndProducts } from 'src/store';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

describe('ProductsAndAdGroupContComponent', () => {
  let component: ProductsAndAdGroupContComponent;
  let fixture: ComponentFixture<ProductsAndAdGroupContComponent>;
  let mockStore: MockStore;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let mockAdGroupProducts = {
    adGroupProducts: [
      { id: 1, name: 'Product 1', price: 10, stock: 'In Stock', SKU: 'PM_1010', added: false },
      { id: 2, name: 'Product 2', price: 20, stock: 'In Stock', SKU: 'PM_1010', added: false },
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductsAndAdGroupContComponent
      ],
      imports: [
        ProductsAndAdGroupPresModule,
        SharedModule,
        BrowserAnimationsModule,
        BrowserModule,
        RouterTestingModule
      ],
      providers: [
        provideMockStore(),
        {provide: Router, useValue: mockRouter}
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsAndAdGroupContComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    mockStore.dispatch = jasmine.createSpy('dispatch');
    mockStore.overrideSelector(selectAllAdGroupProducts, mockAdGroupProducts);
    mockStore.refreshState();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a product when add button is clicked', () => {
    const product: Product = {
      id: 1,
      name: 'Product 1',
      price: 100,
      stock: 'In Stock',
      SKU: 'SKU_1010',
      added: false,
    };

    component.onAddClick(product);
    fixture.detectChanges();

    component.products.subscribe(result => {
      expect(result.length).toBe(1);
    });
  });

  it('should remove a product when remove button is clicked', () => {
    const product: Product = {
      id: 1,
      name: 'Product 1',
      price: 100,
      stock: 'In Stock',
      SKU: 'SKU_1010',
      added: true,
    };
    component.addedProductsSubject.next([product]);
    component.onAddClick(product);
    fixture.detectChanges();

    component.addedProducts.subscribe(result => {
      expect(result.length).toBe(0);
    })
  });

  it('should set ad group product after clicked continue button', () => {
    const product: Product = {
      id: 1,
      name: 'Product 1',
      price: 100,
      stock: 'In Stock',
      SKU: 'SKU_1010',
      added: false,
    };

    component.adGroupName = 'test';
    component.onAddClick(product);
    component.continueButton(null);
    product.added = true;
    fixture.detectChanges();

    expect(mockStore.dispatch).toHaveBeenCalledWith(setAdGroupAndProducts({
      adGroupAndProducts: {adGroupName: component.adGroupName, products: [product]}
    }));

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/keyword-list']);
  });
});
