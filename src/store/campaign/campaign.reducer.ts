import { CampaignType, Keyword, ProductKeyword } from '../../models';
import { Action, createReducer, on } from '@ngrx/store';
import * as campaignActions from './campaign.actions';
import { CampaignDetail } from 'src/models/campaignDetail.model';

/**
 * Campaign State
 */
export interface CampaignState {
  campaignTypes?: CampaignType[];
  keywords?: Keyword[];
  productKeywords?: ProductKeyword[];
  campaigns?: CampaignDetail[];
  currentCampaignID?: any;
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}

/**
 * Campaign initial state
 */
export const initialCampaignState: CampaignState = {
  campaignTypes: [],
  keywords: [],
  productKeywords: [],
  campaigns:[],
  currentCampaignID: 0,
  isLoading: false,
  isLoadingFailure: false,
  isLoadingSuccess: false
};

/**
 * List of actions for Campaign Store
 */
export const campaignReducer = createReducer(
  initialCampaignState,
  on(campaignActions.getCampaignTypes, (state) => ({ ...state, isLoading: true })),
  on(campaignActions.getCampaignTypesSuccess, (state, result) => ({ ...state, campaignTypes: result.payload})),
  on(campaignActions.setCampaignTypeID, (state, result) => ({ ...state, currentCampaignID: result.id })),
  on(campaignActions.getKeywords, (state) => ({ ...state, isLoading: true })),
  on(campaignActions.getKeywordsSuccess, (state, result) => ({ ...state, keywords: result.payload})),
  on(campaignActions.setProductKeywords, (state, result) => ({ ...state, productKeywords : result.keywords })),
  on(campaignActions.getCampaigns, (state) => ({ ...state, isLoading: true })),
  on(campaignActions.getCampaignsSuccess, (state, result) => ({ ...state, campaigns: result.payload}))
);

/**
 * Campaign Store reducer
 */
export function reducer(state: CampaignState | undefined, action: Action): any {
  return campaignReducer(state, action);
}

/**
 *
 * @param state current state
 * @returns list of campaignTypes
 */
export const getAllCampaignTypes = (state: CampaignState) => {
  return {
    campaignTypes: state.campaignTypes,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  };
};

/**
 *
 * @param state current state
 * @returns list of Keywords
 */
export const getAllKeywords = (state: CampaignState) => {
  return {
    keywords: state.keywords
  };
};

/**
 *
 * @param state current state
 * @returns value of selected campaign id
 */
export const getCampaignId = (state: CampaignState) => {
  return {
    currentCampaignID: state.currentCampaignID
  };
};

/**
 *
 * @param state current state
 * @returns value of product keywords list
 */
export const getAllProductKeywords = (state: CampaignState) => {
  return {
    productKeywords: state.productKeywords
  };
};

/**
 *
 * @param state current state
 * @returns value of product keywords list
 */
export const getAllCampaigns = (state: CampaignState) => {
  return {
    campaigns: state.campaigns
  };
};
