import { ModuleWithProviders, NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import * as campaignReducer from "./campaign.reducer";
import { CampaignEffects } from "./campaign.effects";

@NgModule({
  imports: [
    StoreModule.forFeature('campaign', campaignReducer.reducer),
    EffectsModule.forFeature([CampaignEffects])
  ],
  declarations: [],
  exports: []
})
export class CampaignStoreModule {
  static forRoot(): ModuleWithProviders<CampaignStoreModule> {
    return {
      ngModule: CampaignStoreModule
    }
  }
}
