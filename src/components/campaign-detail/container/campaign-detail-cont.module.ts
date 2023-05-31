import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignDetailPresModule } from '../presenter/campaign-detail-pres.module';
import { CampaignDetailContComponent } from './campaign-detail-cont.component';
import { SharedModule } from 'src/components/shared';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CampaignDetailContComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CampaignDetailContComponent
      }
    ]),
    CommonModule,
    CampaignDetailPresModule,
    SharedModule
  ],
  exports: [
    CampaignDetailContComponent,
    RouterModule
  ]
})
export class CampaignDetailContModule { }
