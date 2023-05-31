import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignListPresComponent, } from './campaign-list-pres.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('CampaignListPresComponent', () => {
  let component: CampaignListPresComponent;
  let fixture: ComponentFixture<CampaignListPresComponent>;
  const mockData = [{
    name: 'Holiday Favorites',
    status: 'running',
    startDate: new Date(),
    endDate: new Date(),
    impression: 7,
    clicks: 1,
    acos: 12
  },
  {
    name: 'Holiday Favorites',
    status: 'running',
    startDate: new Date(),
    endDate: new Date(),
    impression: 8,
    clicks:2,
    acos: 12
  },
  {
    name: 'Holiday Favorites',
    status: 'running',
    startDate: new Date(),
    endDate: new Date(),
    impression: 7,
    clicks: 1,
    acos: 12
  }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CampaignListPresComponent
      ],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CampaignListPresComponent);
    component = fixture.componentInstance;
    component.campaigns = mockData;
    fixture.detectChanges();
  });

  it('should create CampaignListPresComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display 3 campaigns in the list', () => {
    fixture.detectChanges();
    const elems = fixture.debugElement.queryAll(By.css('tbody tr'));

    expect(elems.length).toBe(3);
  });
});
