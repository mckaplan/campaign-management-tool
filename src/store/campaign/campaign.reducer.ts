import { AdGroupAndProducts, CampaignType, Keyword, Product, ProductKeyword } from '../../models';
import { Action, createReducer, on } from '@ngrx/store';
import * as campaignActions from './campaign.actions';
import { CampaignDetail } from 'src/models/campaign-detail.model';

/**
 * Campaign State
 */
export interface CampaignState {
  campaignTypes?: CampaignType[];
  keywords?: Keyword[];
  adGroupProducts?: Product[];
  campaigns?: CampaignDetail[];
  selectedProductKeywords?: ProductKeyword[];
  selectedAdGroupAndProducts?: AdGroupAndProducts;
  selectedCampaignDetail?: CampaignDetail;
  selectedCampaignID?: any;
  error?: string;
}

/**
 * Campaign initial state
 */
export const initialCampaignState: CampaignState = {
  campaignTypes: [],
  keywords: [],
  adGroupProducts: [],
  campaigns: [],
  selectedProductKeywords: [],
  selectedAdGroupAndProducts: { adGroupName: '', products: [] },
  selectedCampaignDetail: {} as CampaignDetail,
  selectedCampaignID: 0,
};

/**
 * List of actions for Campaign Store
 */
export const campaignReducer = createReducer(
  initialCampaignState,
  on(campaignActions.getCampaignTypes, (state) => ({ ...state })),
  on(campaignActions.getCampaignTypesSuccess, (state, result) => ({ ...state, campaignTypes: result.payload })),
  on(campaignActions.getCampaignTypesFailure, (state, result) => ({ ...state, error: result.error })),
  on(campaignActions.setCampaignTypeID, (state, result) => ({ ...state, selectedCampaignID: result.id })),
  on(campaignActions.getKeywords, (state) => ({ ...state })),
  on(campaignActions.getKeywordsSuccess, (state, result) => ({ ...state, keywords: result.payload })),
  on(campaignActions.getKeywordsFailure, (state, result) => ({ ...state, error: result.error })),
  on(campaignActions.setProductKeywords, (state, result) => ({ ...state, selectedProductKeywords: result.keywords })),
  on(campaignActions.setCampaignDetail, (state, result) => ({ ...state, selectedCampaignDetail: result.detail })),
  on(campaignActions.getCampaigns, (state) => ({ ...state })),
  on(campaignActions.getCampaignsSuccess, (state, result) => ({ ...state, campaigns: result.payload })),
  on(campaignActions.getCampaignsFailure, (state, result) => ({ ...state, error: result.error })),
  on(campaignActions.getAdGroupProducts, (state) => ({ ...state})),
  on(campaignActions.getAdGroupProductsSuccess, (state, result) => ({ ...state, adGroupProducts: result.payload })),
  on(campaignActions.getAdGroupProductsFailure, (state, result) => ({ ...state, error: result.error })),
  on(campaignActions.setAdGroupAndProducts, (state, result) => ({ ...state, selectedAdGroupAndProducts: result.adGroupAndProducts })),
  on(campaignActions.resetCampaignState, (state) => ({ ...initialCampaignState})),
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
    campaignTypes: state.campaignTypes
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
    selectedCampaignID: state.selectedCampaignID
  };
};

/**
 *
 * @param state current state
 * @returns value of product keywords list
 */
export const getAllProductKeywords = (state: CampaignState) => {
  return {
    selectedProductKeywords: state.selectedProductKeywords
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

/**
 *
 * @param state current state
 * @returns value of product ad group product list
 */
export const getAllAdGroupProducts = (state: CampaignState) => {
  return {
    adGroupProducts: state.adGroupProducts
  };
};

/**
 *
 * @param state current state
 * @returns value of error
 */
export const getError = (state: CampaignState) => {
  return {
    error: state.error
  };
};


