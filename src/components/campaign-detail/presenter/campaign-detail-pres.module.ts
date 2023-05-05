import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignDetailPresComponent } from './campaign-detail-pres.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SharedModule } from 'src/components/shared';

@NgModule({
  declarations: [CampaignDetailPresComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [CampaignDetailPresComponent],
})
export class CampaignDetailPresModule { }
