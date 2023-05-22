import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignTypePresComponent, } from './campaign-type-pres.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('CampaignTypePresComponent', () => {
  let component: CampaignTypePresComponent;
  let fixture: ComponentFixture<CampaignTypePresComponent>;

  const mockData = [{
    name: 'Sponsored Products',
    details: 'Promote products to shoppers actively searching with related keywords',
    id:1,
    url: 'http://www.products.com'
  },
  {
    name: 'Sponsored Brands',
    details: 'Help shoppers discover your brand and product',
    id:2,
    url: 'http://www.brand.com'
  },
  {
    name: 'Sponsored Display',
    details: 'Grow your business by reaching relevent audience',
    id:3,
    url: 'http://www.display.com'
  }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampaignTypePresComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CampaignTypePresComponent);
    component = fixture.componentInstance;
    component.campaignTypes = mockData;
    fixture.detectChanges();
  });

  it('should create CampaignTypePresComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display 3 campaign types', () => {
    fixture.detectChanges();
    const elems = fixture.debugElement.queryAll(By.css('table'));

    expect(elems.length).toBe(3);
  });
});
