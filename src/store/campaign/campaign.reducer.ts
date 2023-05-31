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
  productKeywords?: ProductKeyword[];
  adGroupProducts?: Product[];
  campaigns?: CampaignDetail[];
  adGroupAndProducts?: AdGroupAndProducts;
  currentCampaignDetail?: CampaignDetail;
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
  campaigns: [],
  adGroupProducts: [],
  adGroupAndProducts: { adGroupName: '', products: [] },
  currentCampaignDetail: {} as CampaignDetail,
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
  on(campaignActions.getCampaignTypesSuccess, (state, result) => ({ ...state, campaignTypes: result.payload })),
  on(campaignActions.setCampaignTypeID, (state, result) => ({ ...state, currentCampaignID: result.id })),
  on(campaignActions.getKeywords, (state) => ({ ...state, isLoading: true })),
  on(campaignActions.getKeywordsSuccess, (state, result) => ({ ...state, keywords: result.payload })),
  on(campaignActions.setProductKeywords, (state, result) => ({ ...state, productKeywords: result.keywords })),
  on(campaignActions.setCampaignDetail, (state, result) => ({ ...state, currentCampaignDetail: result.detail })),
  on(campaignActions.getCampaigns, (state) => ({ ...state, isLoading: true })),
  on(campaignActions.getCampaignsSuccess, (state, result) => ({ ...state, campaigns: result.payload })),
  on(campaignActions.getAdGroupProducts, (state) => ({ ...state, isLoading: true })),
  on(campaignActions.getAdGroupProductsSuccess, (state, result) => ({ ...state, adGroupProducts: result.payload })),
  on(campaignActions.setAdGroupAndProducts, (state, result) => ({ ...state, adGroupAndProducts: result.adGroupAndProducts })),
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
