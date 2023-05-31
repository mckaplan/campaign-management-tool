import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionGroupPresComponent } from './action-group-pres.component';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../sharedMaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ActionGroupPresComponent', () => {
  let component: ActionGroupPresComponent;
  let fixture: ComponentFixture<ActionGroupPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ActionGroupPresComponent
      ],
      imports: [
        CommonModule,
        SharedMaterialModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ActionGroupPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ActionGroupPresComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display add button and search input', () => {
    const elem = fixture.debugElement.nativeElement;

    expect(elem.querySelector('#add-button')).toBeTruthy();
    expect(elem.querySelector('#search')).toBeTruthy();
  });
});
