import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CampaignListContComponent } from "./campaign-list-cont.component";
import { CampaignListPresModule } from "../presenter";
import { SharedModule } from "src/components/shared";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CampaignListContComponent
      }
    ]),
    CommonModule,
    CampaignListPresModule,
    SharedModule
  ],
  declarations: [
    CampaignListContComponent
  ],
  exports: [
    CampaignListContComponent,
    RouterModule
  ]
})
export class CampaignListContModule {

}
