import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/components/shared";
import { CampaignTypeContComponent } from "./campaign-type-cont.component";
import { CampaignTypePresModule } from "../presenter";

@NgModule({
  imports: [
    CommonModule,
    CampaignTypePresModule,
    SharedModule
  ],
  declarations: [
    CampaignTypeContComponent
  ],
  exports: [
    CampaignTypeContComponent,
  ]
})
export class CampaignTypeContModule {

}
