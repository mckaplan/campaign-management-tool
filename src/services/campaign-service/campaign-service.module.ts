
import { NgModule } from "@angular/core";
import { CampaignService } from "./campaign.service";

@NgModule({
  providers:[
    CampaignService
  ],
  exports: []
})
export class CampaignServiceModule {}
