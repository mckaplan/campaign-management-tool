import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription, filter } from 'rxjs';
import { selectError, setCampaignDetail } from 'src/store';
import { Router } from '@angular/router';
import { CampaignDetail } from 'src/models';
import { ErrorService } from 'src/services';

@Component({
  selector: 'app-campaign-detail-cont',
  templateUrl: './campaign-detail-cont.component.html',
  styleUrls: ['./campaign-detail-cont.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignDetailContComponent implements OnInit, OnDestroy {
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
    private errorService: ErrorService,
    private router: Router) {
    this.subscriptions.push(
      this.store.pipe(select(selectError))
        .pipe(
          filter((err) => !!err.error),
        ).subscribe(res => {
          this.errorService.showErrorMessages(res.error!);
        })
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.errorService.clearErrorMessages();
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
    if (!!this.campaignDetail.campaignName) {
      this.store.dispatch(setCampaignDetail({ detail: this.campaignDetail }));
      this.router.navigate(['/products-and-ad-group']);
    }
    else {
      this.errorService.showErrorMessages('Please fill required field(s)')
    }
  }

  /**
   * redirect to previous page
   * @param e event value
   */
  public cancelButton(e: any) { }
}
