import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignTypeContComponent } from './campaign-type-cont.component';
import { SharedModule } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CampaignTypePresModule } from '../presenter';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { selectAllCampaignTypes } from 'src/store';

import { HttpClientModule } from '@angular/common/http';

describe('CampaignTypeContComponent', () => {
  let component: CampaignTypeContComponent;
  let fixture: ComponentFixture<CampaignTypeContComponent>;
  let mockStore: MockStore;
  let mockCampaignType = {
    campaignTypes: [
      {
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
      }
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CampaignTypeContComponent
      ],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CampaignTypePresModule
      ],
      providers: [
        provideMockStore()
      ]
    })
      .compileComponents();

    mockStore = TestBed.inject(MockStore);
    mockStore.dispatch = jasmine.createSpy('dispatch');
    mockStore.overrideSelector(selectAllCampaignTypes, mockCampaignType);
    mockStore.refreshState();
    fixture = TestBed.createComponent(CampaignTypeContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CampaignTypeContComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display campaign types', () => {
    component.InitData();
    fixture.detectChanges();

    component.campaignTypes.subscribe((result) => {
      expect(result.length).toBe(3);
    });
  });
});
