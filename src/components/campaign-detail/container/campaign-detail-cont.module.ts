import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignDetailPresModule } from '../presenter/campaign-detail-pres.module';
import { CampaignDetailContComponent } from './campaign-detail-cont.component';
import { SharedModule } from 'src/components/shared';

@NgModule({
  declarations: [CampaignDetailContComponent],
  imports: [
    CommonModule,
    CampaignDetailPresModule,
    SharedModule
  ],
  exports: [CampaignDetailContComponent]
})
export class CampaignDetailContModule { }
