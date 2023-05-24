import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CampaignDetail } from 'src/models/campaignDetail.model';

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
  invalidDate: boolean = false;
  invalidBudget: boolean = false;

  @Output() formSubmit: EventEmitter<CampaignDetail> =
    new EventEmitter<CampaignDetail>();
    /**
   * Output of cancel button click to redirect previous page
   */
  @Output()
  public cancelButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder) {
    this.campaignForm = this.formBuilder.group(      {
      campaignName: new FormControl('', Validators.required),
      dailyBudget: new FormControl('', Validators.required),
      startDate: new FormControl<Date | null>(null, [Validators.required]),
      endDate: new FormControl<Date | null>(null, [Validators.required]),
    },
    { validators: [this.dateValidator, this.budgetValidator] } 
  );


    this.campaignForm.valueChanges.subscribe(
      (result) => (this.campaignDetail = result)
    );
  }

  ngOnInit(): void {}

  handleFormSubmit() {
      this.formSubmit.emit(this.campaignDetail);
      console.log('form submitted');
  }

  dateValidator = (group: FormGroup): {[key: string]: boolean} | null => {
    const startDate = group.get('startDate')?.value;
    const endDate = group.get('endDate')?.value;
  
    if (startDate && endDate && startDate >= endDate) {
      console.log('Invalid Date');
      this.invalidDate = true;
    } else {
      this.invalidDate = false;
    }
    return null;
  }

  budgetValidator = (group: FormGroup): {[key: string]: boolean} | null => {
    const budget = group.get('dailyBudget')?.value;

    if(budget && budget < 1) {
      console.log('Invalid budget');
      this.invalidBudget = true;
    } else {
      this.invalidBudget = false;
    }
    return null;
  }
}
