import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAndAdGroupContComponent } from './products-and-ad-group-cont.component';
import { ProductsAndAdGroupPresModule } from '../presenter/products-and-ad-group-pres.module';
import { ProductsPresModule } from '../subcomponent/products';
import { SharedModule } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from 'src/services';
import { Product } from 'src/models';

describe('ProductsAndAdGroupContComponent', () => {
  let component: ProductsAndAdGroupContComponent;
  let fixture: ComponentFixture<ProductsAndAdGroupContComponent>;
  let productService: jasmine.SpyObj<ProductService>;

  beforeEach(async () => {
    productService = jasmine.createSpyObj('ProductService', ['getProducts']);

    await TestBed.configureTestingModule({
      declarations: [ProductsAndAdGroupContComponent],
      imports: [ProductsAndAdGroupPresModule, ProductsPresModule, SharedModule, BrowserAnimationsModule],
      providers: [{ provide: ProductService, useValue: productService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsAndAdGroupContComponent);
    component = fixture.componentInstance;
    productService.getProducts.and.returnValue([
      {
        id: 1,
        name: 'Product 1', 
        price: 100,
        stock: 'In Stock',
        SKU: 'SKU_1010',
        added: false,
      },
    ]);
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

    component.productsSubject.next([product]);
    component.onAddClick(product);
    fixture.detectChanges();

    component.productsSubject.subscribe(result => {
      expect(result.length).toBe(0);
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
});
