import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignListContComponent } from './campaign-list-cont.component';
import { SharedModule } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CampaignListPresModule } from '../presenter';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { selectCampaigns } from 'src/store';


describe('CampaignListContComponent', () => {
  let component: CampaignListContComponent;
  let fixture: ComponentFixture<CampaignListContComponent>;
  let mockStore: MockStore;

  let mockCampaigns = {
    campaigns: [
      {
        campaignName: 'Holiday Favorites1',
        dailyBudget: 3,
        startDate: new Date(),
        endDate: new Date()
      },
      {
        campaignName: 'Holiday Favorites2',
        dailyBudget: 5,
        startDate: new Date(),
        endDate: new Date()
      },
      {
        campaignName: 'Holiday Favorites3',
        dailyBudget: 7,
        startDate: new Date(),
        endDate: new Date()
      }
    ]
  };

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
        provideMockStore(),
      ]
    })
      .compileComponents();

    mockStore = TestBed.inject(MockStore);
    mockStore.dispatch = jasmine.createSpy('dispatch');
    mockStore.overrideSelector(selectCampaigns,mockCampaigns);
    mockStore.refreshState();
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

  it('should filter campaign list via search input change event trigger', () => {
    const searchInput = 'Favorites1'
    component.searchInputChanged(searchInput);
    fixture.detectChanges();

    component.campaignList.subscribe((result) => {
      expect(result.length).toBe(1);
    });
  });
});
