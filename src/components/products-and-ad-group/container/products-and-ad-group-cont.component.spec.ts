import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAndAdGroupContComponent } from './products-and-ad-group-cont.component';
import { of } from 'rxjs';
import { ProductsAndAdGroupPresModule } from '../presenter/products-and-ad-group-pres.module';
import { ProductsPresModule } from '../products';
import { SharedModule } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from 'src/services';

describe('ProductsAndAdGroupContComponent', () => {
  let component: ProductsAndAdGroupContComponent;
  let fixture: ComponentFixture<ProductsAndAdGroupContComponent>;
  let productService: jasmine.SpyObj<ProductService>;

  beforeEach(async () => {
    productService = jasmine.createSpyObj('ProductService', ['getProducts']);

    await TestBed.configureTestingModule({
      declarations: [ ProductsAndAdGroupContComponent ],
      imports: [ProductsAndAdGroupPresModule, ProductsPresModule, SharedModule, BrowserAnimationsModule],
      providers: [{provide: ProductService, useValue: productService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsAndAdGroupContComponent);
    component = fixture.componentInstance;
    productService.getProducts.and.returnValue(of([{ id: 1, name: 'Product 1', price: 100, stock: 'In Stock', SKU: 'SKU_1010', added: false }]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a product when add button is clicked', () => {
    const addButton = fixture.nativeElement.querySelector('button');
    addButton.click();
    component.addClick$.subscribe((product) => {
      expect(product.name).toBe('Product 1');
      expect(product.added).toBe(true);
    });
  });

  it('should remove a product when remove button is clicked', () => {
    const addButton = fixture.nativeElement.querySelector('button');
    addButton.click();
    addButton.click();
    component.addClick$.subscribe((product) => {
      expect(product.name).toBe('Product 1');
      expect(product.added).toBe(false);
    });
  });
});
