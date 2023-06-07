import { createFeatureSelector, createSelector} from '@ngrx/store';
import * as campaignReducer from './campaign.reducer';

/** Select Campaign State */
export const getCampaignState = createFeatureSelector<campaignReducer.CampaignState>('campaign');

/** Select all list of campaign types */
export const selectAllCampaignTypes = createSelector(
  getCampaignState,
  campaignReducer.getAllCampaignTypes
);

/** Get selected campaign id */
export const getCurrentCampaignId = createSelector(
  getCampaignState,
  campaignReducer.getCampaignId
);

/** Select all keyword list */
export const selectAllKeywords = createSelector(
  getCampaignState,
  campaignReducer.getAllKeywords
);

/** Select product keywords */
export const selectProductKeywords = createSelector(
  getCampaignState,
  campaignReducer.getAllProductKeywords
);

/** Select campaign list */
export const selectCampaigns = createSelector(
  getCampaignState,
  campaignReducer.getAllCampaigns
);

/** Select ad group product list */
export const selectAllAdGroupProducts = createSelector(
  getCampaignState,
  campaignReducer.getAllAdGroupProducts
);

/** Select ad group product list */
export const selectError = createSelector(
  getCampaignState,
  campaignReducer.getError
);


