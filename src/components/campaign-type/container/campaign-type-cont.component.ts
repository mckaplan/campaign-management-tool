import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, map } from 'rxjs';
import { CampaignType } from 'src/models';
import { getCampaignTypes, selectAllCampaignTypes, setCampaignTypeID } from '../../../store';

@Component({
  selector: 'app-campaign-type-cont',
  templateUrl: './campaign-type-cont.component.html',
  styleUrls: ['./campaign-type-cont.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignTypeContComponent implements OnInit {
  /**
   * campaignTypes subject
   */
  private campaingTypesSubject = new BehaviorSubject<CampaignType[]>([]);

  /**
   * campaign type object to show list
   */
  public campaignTypes = this.campaingTypesSubject.asObservable();

  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {
    this.InitData();
  }

  /**
   * Get initial of all campaign types data
   */
  public InitData() {
    this.store.dispatch(getCampaignTypes());

    this.store.select(selectAllCampaignTypes)
      .pipe(
        map(types => types.campaignTypes)
      )
      .subscribe(res => {
        this.campaingTypesSubject.next(res!);
      });
  }

  /**
   * Set campaign Id in store
   * @param id value of campaign type id
   */
  onContinueBtnClicked(id: any) {
    this.store.dispatch(setCampaignTypeID({ id }));
  }
}
