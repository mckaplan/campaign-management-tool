import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDetailContComponent } from './campaign-detail-cont.component';
import { CommonModule } from '@angular/common';
import { CampaignDetailPresComponent } from '../presenter/campaign-detail-pres.component';
import { SharedModule } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CampaignDetailPresModule } from '../presenter';

describe('CampaignDetailContComponent', () => {
  let component: CampaignDetailContComponent;
  let fixture: ComponentFixture<CampaignDetailContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignDetailContComponent ],
      imports: [ 
        CommonModule, 
        CampaignDetailPresModule,
        SharedModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

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
    spyOn(console, 'log');
    component.onFormSubmit(formData);
    expect(console.log).toHaveBeenCalledWith(formData);
  });
});
