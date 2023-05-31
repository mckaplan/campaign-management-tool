import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { setCampaignDetail } from 'src/store';
import { Router } from '@angular/router';
import { CampaignDetail } from 'src/models';

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

  constructor(
    private readonly store: Store,
    private router: Router) {
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
    this.router.navigate(['/products-and-ad-group']);
  }

  /**
   * redirect to previous page
   * @param e event value
   */
  public cancelButton(e: any) { }
}
