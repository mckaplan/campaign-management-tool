import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/components/shared";
import { CampaignListPresComponent } from "./campaign-list-pres.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CampaignListPresComponent
  ],
  exports: [
    CampaignListPresComponent
  ]
})
export class CampaignListPresModule { }
