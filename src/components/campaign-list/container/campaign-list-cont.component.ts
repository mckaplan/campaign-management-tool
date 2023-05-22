import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, filter, map, take } from 'rxjs';
import { Campaign } from 'src/models';
import { getCampaigns, selectCampaigns } from '../../../store';

@Component({
  selector: 'app-campaign-list-cont',
  templateUrl: './campaign-list-cont.component.html',
  styleUrls: ['./campaign-list-cont.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  constructor(
    private readonly store: Store
  ) {
    this.store.dispatch(getCampaigns());
  }

  ngOnInit(): void {
    this.InitData();
  }

  /**
   * Get data of campaigns list
   * @param text value of filtered input name
   */
  public InitData(text?:string) {
    this.store.select(selectCampaigns)
      .pipe(
        filter((val) => !!val.campaigns),
        map((val) => val.campaigns),
        take(1)
      )
      .subscribe((campaigns) => {
        const filteredCampaigns = text ? campaigns!.filter((val) => val.campaignName.indexOf(text) >-1 ) : campaigns!;
        this.campaingListSubject.next(filteredCampaigns.map((campaign) => {
          return { name: campaign.campaignName, status: 'running', startDate: campaign.startDate, endDate: campaign.endDate, acos: 7, clicks: 5, impression: 3 } as Campaign;
        }));
      });
  }

  createCampaign(e: any) {

  }

  /**
   *
   * @param inputText value of search when triggering event on input
   */
  searchInputChanged(inputText: string) {
    this.InitData(inputText);
  }
}
