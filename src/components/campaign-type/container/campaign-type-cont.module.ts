import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/components/shared";
import { CampaignTypeContComponent } from "./campaign-type-cont.component";
import { CampaignTypePresModule } from "../presenter";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CampaignTypeContComponent
      }
    ]),
    CommonModule,
    CampaignTypePresModule,
    SharedModule
  ],
  declarations: [
    CampaignTypeContComponent
  ],
  exports: [
    CampaignTypeContComponent,
    RouterModule
  ]
})
export class CampaignTypeContModule {

}
