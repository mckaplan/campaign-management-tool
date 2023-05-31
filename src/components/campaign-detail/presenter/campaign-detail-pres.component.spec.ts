import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CampaignDetailPresComponent } from './campaign-detail-pres.component';
import { SharedModule } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CampaignDetailPresComponent', () => {
  let component: CampaignDetailPresComponent;
  let fixture: ComponentFixture<CampaignDetailPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CampaignDetailPresComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        BrowserAnimationsModule]
    }).compileComponents();
    fixture = TestBed.createComponent(CampaignDetailPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the form data on form submit', () => {
    const campaignDetail: any = {
      campaignName: 'Test Campaign',
      dailyBudget: 1000,
      startDate: new Date(),
      endDate: new Date(),
    };

    component.campaignForm.setValue(campaignDetail);
    component.campaignForm.valueChanges.subscribe((result) => {
      expect(result).toBe(campaignDetail);
      spyOn(component.formSubmit, 'emit').and.returnValue();
      expect(component.formSubmit.emit).toHaveBeenCalledWith(campaignDetail);
    });
  });
});
