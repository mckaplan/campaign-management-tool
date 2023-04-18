import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordAddDialogPresComponent } from './keyword-add-dialog-pres.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('KeywordAddDialogPresComponent', () => {
  let component: KeywordAddDialogPresComponent;
  let fixture: ComponentFixture<KeywordAddDialogPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeywordAddDialogPresComponent],
      imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { keyword: '' } }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KeywordAddDialogPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
