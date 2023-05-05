import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPresComponent } from './products-pres.component';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

xdescribe('ProductsPresComponent', () => {
  let component: ProductsPresComponent;
  let fixture: ComponentFixture<ProductsPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsPresComponent ],
      imports: [SharedModule, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPresComponent);
    component = fixture.componentInstance;
    component.products = [
      { id: 1, name: 'Product 1', price: 100, stock: 'In Stock', SKU: 'SKU_1010', added: false },
      { id: 2, name: 'Product 2', price: 100, stock: 'In Stock', SKU: 'SKU_1010', added: true },
      { id: 3, name: 'Product 3', price: 100, stock: 'In Stock', SKU: 'SKU_1010', added: false }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the list of products', () => {
    const productElements = fixture.debugElement.queryAll(By.css('.product'));
    expect(productElements.length).toEqual(3);
    expect(productElements[0].nativeElement.textContent).toContain('Product 1');
    expect(productElements[1].nativeElement.textContent).toContain('Product 2');
    expect(productElements[2].nativeElement.textContent).toContain('Product 3');
  });
});
