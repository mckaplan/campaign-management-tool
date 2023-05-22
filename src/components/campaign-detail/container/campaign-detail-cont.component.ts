import { Component } from '@angular/core';
import { CampaignDetail } from 'src/models/campaignDetail.model';

@Component({
  selector: 'app-campaign-detail-cont',
  templateUrl: './campaign-detail-cont.component.html',
  styleUrls: ['./campaign-detail-cont.component.scss'],
})
export class CampaignDetailContComponent {
  campaignDetail: CampaignDetail = {
    campaignName: '',
    dailyBudget: 0,
    startDate: new Date(''),
    endDate: new Date(''),
  };

  onFormSubmit(formData: any) {
    console.log('Container is called');
    console.log(formData);
  }

  /**
   * redirect to next page
   * @param e event value
   */
  public continueButton(e: any) {
    console.log('Container is called');
    console.log(e);
  }

  /**
   * redirect to previous page
   * @param e event value
   */
  public cancelButton(e: any) {}
}
