import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { CampaignType } from 'src/models';

@Component({
  selector: 'app-campaign-type-cont',
  templateUrl: './campaign-type-cont.component.html',
  styleUrls: ['./campaign-type-cont.component.scss']
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

  constructor() {

  }

  ngOnInit(): void {
    this.InitData();
  }

  public InitData() {
    this.campaingTypesSubject.next([{
      name: 'Sponsored Products',
      details: 'Promote products to shoppers actively searching with related keywords',
      id:1,
      url: 'http://www.products.com'
    },
    {
      name: 'Sponsored Brands',
      details: 'Help shoppers discover your brand and product',
      id:2,
      url: 'http://www.brand.com'
    },
    {
      name: 'Sponsored Display',
      details: 'Grow your business by reaching relevent audience',
      id:3,
      url: 'http://www.display.com'
    }]);
  }

  onContinueBtnClicked(e:any) {
    console.log(e);
  }
}
