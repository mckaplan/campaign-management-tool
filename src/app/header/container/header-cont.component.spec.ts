import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContComponent } from './header-cont.component';
import { SharedModule } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderPresModule } from '../presenter';

import { HttpClientModule } from '@angular/common/http';

describe('HeaderContComponent', () => {
  let component: HeaderContComponent;
  let fixture: ComponentFixture<HeaderContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeaderContComponent
      ],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HeaderPresModule
      ],
      providers: []
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CampaignTypeContComponent', () => {
    expect(component).toBeTruthy();
  });
});
