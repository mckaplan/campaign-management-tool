import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { CampaignType } from 'src/models';

@Component({
  selector: 'app-campaign-type-pres',
  templateUrl: './campaign-type-pres.component.html',
  styleUrls: ['./campaign-type-pres.component.scss']
})
export class CampaignTypePresComponent {
  /**
   * value of campaign type list
   */
  @Input()
  public campaignTypes: CampaignType[] | null = [];

  @Output()
  public continueBtnClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() {

  }
}
