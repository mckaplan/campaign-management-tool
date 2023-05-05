import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignTypeContComponent } from './campaign-type-cont.component';
import { SharedModule } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CampaignTypePresModule } from '../presenter';

describe('CampaignTypeContComponent', () => {
  let component: CampaignTypeContComponent;
  let fixture: ComponentFixture<CampaignTypeContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CampaignTypeContComponent
      ],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        CampaignTypePresModule
      ],
      providers: [
      ]
    })
      .compileComponents();

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
