import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CampaignDetail } from 'src/models/campaign-detail.model';

@Component({
  selector: 'app-campaign-detail-pres',
  templateUrl: './campaign-detail-pres.component.html',
  styleUrls: ['./campaign-detail-pres.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignDetailPresComponent implements OnInit {
  /**
   *
   */
  campaignForm: FormGroup;

  /**
   *
   */
  invalidDate: boolean = false;

  /**
   *
   */
  invalidBudget: boolean = false;

  /**
   *
   */
  @Output()
  formSubmit: EventEmitter<CampaignDetail> = new EventEmitter<CampaignDetail>();

  /**
   * Output of cancel button click to redirect previous page
   */
  @Output()
  public cancelButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder,) {
    this.campaignForm = this.formBuilder.group({
      campaignName: new FormControl('', Validators.required),
      dailyBudget: new FormControl('', Validators.required),
      startDate: new FormControl<Date | null>(null, [Validators.required]),
      endDate: new FormControl<Date | null>(null, [Validators.required]),
    },
      { validators: [this.dateValidator, this.budgetValidator] }
    );


    this.campaignForm.valueChanges.subscribe(
      (result) => {
        if (this.campaignForm.status !== 'INVALID') {
          this.formSubmit.emit(result);
        }
      }
    );
  }

  ngOnInit(): void { }

  /**
   *
   * @param group
   * @returns
   */
  dateValidator = (group: FormGroup): { [key: string]: boolean } | null => {
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

  /**
   *
   * @param group
   * @returns
   */
  budgetValidator = (group: FormGroup): { [key: string]: boolean } | null => {
    const budget = group.get('dailyBudget')?.value;

    if (budget && budget < 1) {
      console.log('Invalid budget');
      this.invalidBudget = true;
    } else {
      this.invalidBudget = false;
    }
    return null;
  }
}
