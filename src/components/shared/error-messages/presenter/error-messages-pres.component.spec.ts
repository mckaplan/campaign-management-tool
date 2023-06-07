import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { ErrorMessagesPresComponent } from './error-messages-pres.component';

describe('ErrorMessagesPresComponent', () => {
  let component: ErrorMessagesPresComponent;
  let fixture: ComponentFixture<ErrorMessagesPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorMessagesPresComponent],
      imports: [
        CommonModule,
        SharedMaterialModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ErrorMessagesPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ErrorMessagesPresComponent', () => {
    expect(component).toBeTruthy();
  });
});
