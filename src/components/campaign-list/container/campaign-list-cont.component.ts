import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { Campaign } from 'src/models';

@Component({
  selector: 'app-campaign-list-cont',
  templateUrl: './campaign-list-cont.component.html',
  styleUrls: ['./campaign-list-cont.component.scss']
})
export class CampaignListContComponent implements OnInit {
  /**
   * campaignList subject
   */
  private campaingListSubject = new BehaviorSubject<Campaign[]>([]);

  /**
   * campaign list object to show list
   */
  public campaignList = this.campaingListSubject.asObservable();

  constructor() {

  }

  ngOnInit(): void {
    this.InitData();
  }

  public InitData() {
    this.campaingListSubject.next([{
      name: 'Holiday Favorites',
      status: 'running',
      startDate: '11/11/2020',
      endDate: '11/11/2023',
      impression: 7,
      clicks: 1,
      acos: 12
    },
    {
      name: 'Holiday Favorites',
      status: 'running',
      startDate: '11/11/2020',
      endDate: '11/11/2023',
      impression: 8,
      clicks:2,
      acos: 12
    },
    {
      name: 'Holiday Favorites',
      status: 'running',
      startDate: '10/10/2020',
      endDate: '10/10/2023',
      impression: 7,
      clicks: 1,
      acos: 12
    }]);
  }
  createCampaign(e:any) {

  }

  searchInputChanged(e:any) {

  }
}
