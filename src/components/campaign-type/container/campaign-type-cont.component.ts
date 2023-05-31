import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subscription, map } from 'rxjs';
import { CampaignType } from 'src/models';
import { getCampaignTypes, selectAllCampaignTypes, setCampaignTypeID } from '../../../store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign-type-cont',
  templateUrl: './campaign-type-cont.component.html',
  styleUrls: ['./campaign-type-cont.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignTypeContComponent implements OnInit, OnDestroy {
  /**
   * campaignTypes subject
   */
  private campaingTypesSubject = new BehaviorSubject<CampaignType[]>([]);

  /**
   * campaign type object to show list
   */
  public campaignTypes = this.campaingTypesSubject.asObservable();

  /**
   * List of subscriptions to unsubscribe on destroy
   */
  private subscriptions: Subscription[] = [];

  constructor(
    private readonly store: Store,
    private router: Router) {
  }

  ngOnInit(): void {
    this.InitData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  /**
   * Get initial of all campaign types data
   */
  public InitData() {
    this.store.dispatch(getCampaignTypes());
    this.subscriptions.push(
      this.store.select(selectAllCampaignTypes)
        .pipe(
          map(types => types.campaignTypes)
        )
        .subscribe(res => {
          this.campaingTypesSubject.next(res!);
        })
    );
  }

  /**
   * Set campaign Id in store and redirect other page
   * @param id value of campaign type id
   */
  onContinueBtnClicked(id: any) {
    this.store.dispatch(setCampaignTypeID({ id }));
    this.router.navigate(['/campaign-detail']);
  }
}
