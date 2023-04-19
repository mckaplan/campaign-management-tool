import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CampaignListContComponent } from "./campaign-list-cont.component";
import { CampaignListPresModule } from "../presenter";
import { SharedModule } from "src/components/shared";

@NgModule({
  imports: [
    CommonModule,
    CampaignListPresModule,
    SharedModule
  ],
  declarations: [
    CampaignListContComponent
  ],
  exports: [
    CampaignListContComponent,
  ]
})
export class CampaignListContModule {

}
