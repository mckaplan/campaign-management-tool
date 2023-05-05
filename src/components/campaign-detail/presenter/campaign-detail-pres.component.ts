import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CampaignDetail } from 'src/models/CampaignDetail.model';

@Component({
  selector: 'app-campaign-detail-pres',
  templateUrl: './campaign-detail-pres.component.html',
  styleUrls: ['./campaign-detail-pres.component.scss'],
})
export class CampaignDetailPresComponent implements OnInit{
  campaignForm: FormGroup;
  campaignDetail: CampaignDetail;
  dateError: string;
  control: FormControl;

  @Output() formSubmit: EventEmitter<CampaignDetail> =
    new EventEmitter<CampaignDetail>();
    /**
   * Output of cancel button click to redirect previous page
   */
  @Output()
  public cancelButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder) {
    this.campaignForm = this.formBuilder.group({
      campaignName: new FormControl('', Validators.required),
      dailyBudget: new FormControl('', Validators.required),
      startDate: new FormControl<Date | null>(null, [Validators.required]),
      endDate: new FormControl<Date | null>(null, [Validators.required]),
    });
    this.campaignForm.valueChanges.subscribe(
      (result) => (this.campaignDetail = result)
    );
  }

  ngOnInit(): void {}

  handleFormSubmit() {
      this.formSubmit.emit(this.campaignDetail);
      console.log('form submitted');
  }

  dateValidator(control: FormControl): ValidationErrors | null {
    const startDate = control.get('startDate')?.value;
    const endDate = control.get('endDate')?.value;

    if (startDate === endDate || startDate > endDate) {
      return { 'wrongDate': true };
    }
    return null;
  }
}
