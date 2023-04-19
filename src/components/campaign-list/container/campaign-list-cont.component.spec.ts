import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignListContComponent } from './campaign-list-cont.component';
import { SharedModule } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CampaignListPresModule } from '../presenter';
import { ReplaySubject } from 'rxjs';

describe('CampaignListContComponent', () => {
  let component: CampaignListContComponent;
  let fixture: ComponentFixture<CampaignListContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CampaignListContComponent
      ],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        CampaignListPresModule
      ],
      providers: [
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CampaignListContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CampaignListContComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display campaign list', () => {
    component.InitData();
    fixture.detectChanges();

    component.campaignList.subscribe((result) => {
      expect(result.length).toBe(3);
    });
  });
});
