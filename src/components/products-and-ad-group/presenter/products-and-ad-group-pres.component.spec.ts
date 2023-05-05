import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAndAdGroupPresComponent } from './products-and-ad-group-pres.component';

xdescribe('ProductsAndAdGroupPresComponent', () => {
  let component: ProductsAndAdGroupPresComponent;
  let fixture: ComponentFixture<ProductsAndAdGroupPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAndAdGroupPresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsAndAdGroupPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
