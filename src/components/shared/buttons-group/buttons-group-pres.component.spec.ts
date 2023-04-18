import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsGroupPresComponent } from './buttons-group-pres.component';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../sharedMaterial.module';

describe('ButtonsGroupPresComponent', () => {
  let component: ButtonsGroupPresComponent;
  let fixture: ComponentFixture<ButtonsGroupPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsGroupPresComponent ],
      imports: [
        CommonModule,
        SharedMaterialModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsGroupPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ButtonsGroupPresComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display cancel and continue button visibility', () => {
    const elem = fixture.debugElement.nativeElement;

    expect(elem.querySelector('#cancel-button')).toBeTruthy();
    expect(elem.querySelector('#continue-button')).toBeTruthy();
  });
});
