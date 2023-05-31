import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPresComponent, } from './header-pres.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('HeaderPresComponent', () => {
  let component: HeaderPresComponent;
  let fixture: ComponentFixture<HeaderPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderPresComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        BrowserAnimationsModule,
        AppRoutingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create HeaderPresComponent', () => {
    expect(component).toBeTruthy();
  });
});
