import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CampaignDetail } from 'src/models/campaign-detail.model';
import { setCampaignDetail } from 'src/store';

@Component({
  selector: 'app-campaign-detail-cont',
  templateUrl: './campaign-detail-cont.component.html',
  styleUrls: ['./campaign-detail-cont.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignDetailContComponent implements OnDestroy {
  /**
   * keep current campaign detail derived from formgroup
   */
  private campaignDetail: CampaignDetail = {
    campaignName: '',
    dailyBudget: 0,
    startDate: new Date(''),
    endDate: new Date(''),
  };

  /**
  * List of subscriptions to unsubscribe on destroy
  */
  private subscriptions: Subscription[] = [];

  constructor(private readonly store: Store) {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  /**
   * get data from event that is campaign detail info
   * @param formData value of form
   */
  onFormSubmit(formData: any) {
    this.campaignDetail = formData;
  }

  /**
   * redirect to next page
   * @param e event value
   */
  public continueButton(e: any) {
    this.store.dispatch(setCampaignDetail({ detail: this.campaignDetail }));
  }

  /**
   * redirect to previous page
   * @param e event value
   */
  public cancelButton(e: any) { }
}
