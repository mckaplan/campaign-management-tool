import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDetailContComponent } from './campaign-detail-cont.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CampaignDetailPresModule } from '../presenter';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { setCampaignDetail } from 'src/store';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

describe('CampaignDetailContComponent', () => {
  let component: CampaignDetailContComponent;
  let fixture: ComponentFixture<CampaignDetailContComponent>;
  let mockStore: MockStore;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CampaignDetailContComponent
      ],
      imports: [
        CommonModule,
        CampaignDetailPresModule,
        SharedModule,
        BrowserAnimationsModule,
        BrowserModule,
        RouterTestingModule
      ],
      providers: [
        provideMockStore(),
        {provide: Router, useValue: mockRouter}
      ]
    })
    .compileComponents();
    mockStore = TestBed.inject(MockStore);
    mockStore.dispatch = jasmine.createSpy('dispatch');
    mockStore.refreshState();
    fixture = TestBed.createComponent(CampaignDetailContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CampaignDetailContComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should log form data on form submit', async() => {
    let formData = {
      campaignName: 'Test Campaign',
      dailyBudget: 100,
      startDate: new Date(),
      endDate: new Date()
    };

    component.onFormSubmit(formData);
    component.continueButton(null);

    expect(mockStore.dispatch).toHaveBeenCalledWith(setCampaignDetail({
      detail: formData
    }));
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/products-and-ad-group']);
  });
});
