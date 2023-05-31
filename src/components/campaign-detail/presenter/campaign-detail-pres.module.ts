import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignDetailPresComponent } from './campaign-detail-pres.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/components/shared';

@NgModule({
  declarations: [
    CampaignDetailPresComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    CampaignDetailPresComponent
  ]
})
export class CampaignDetailPresModule { }
