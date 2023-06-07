import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessagesContComponent } from './error-messages-cont.component';
import { SharedMaterialModule, } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

describe('ErrorMessagesContComponent', () => {
  let component: ErrorMessagesContComponent;
  let fixture: ComponentFixture<ErrorMessagesContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ErrorMessagesContComponent
      ],
      imports: [
        SharedMaterialModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ErrorMessagesContComponent,
      ],
      providers: []
    })
      .compileComponents();

    fixture = TestBed.createComponent(ErrorMessagesContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CampaignTypeContComponent', () => {
    expect(component).toBeTruthy();
  });
});
