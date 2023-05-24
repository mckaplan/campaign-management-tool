import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/components/shared';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsPresComponent } from './products-pres.component';

describe('ProductsPresComponent', () => {
  let component: ProductsPresComponent;
  let fixture: ComponentFixture<ProductsPresComponent>;
  const mockData = [
    { id: 1, name: 'Product 1', price: 100, stock: 'In Stock', SKU: 'SKU_1010', added: false },
    { id: 2, name: 'Product 2', price: 100, stock: 'In Stock', SKU: 'SKU_1010', added: true },
    { id: 3, name: 'Product 3', price: 100, stock: 'In Stock', SKU: 'SKU_1010', added: false }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsPresComponent],
      imports: [
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        SharedModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductsPresComponent);
    component = fixture.componentInstance;
    component.products = mockData;
    fixture.detectChanges();
  });

  it('should create KeywordListPresComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display keyword list', () => {
    const elems = fixture.debugElement.queryAll(By.css('.products'));

    expect(elems.length).toBe(3);
    expect(elems[0].query(By.css('mat-card-title')).nativeElement.innerHTML).toBe('Product 1')
  });
});
