import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/components/shared";
import { CampaignTypePresComponent } from "./campaign-type-pres.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CampaignTypePresComponent
  ],
  exports: [
    CampaignTypePresComponent
  ]
})
export class CampaignTypePresModule { }
