import { createAction, props, } from "@ngrx/store";

/**
 * Actions
 */
export const GET_CAMPAIGN_TYPES = '[Campaign Types] Get Campaign Types';
export const GET_CAMPAIGN_TYPES_SUCCESS = '[Campaign Types] Get Campaign Types Success';
export const GET_CAMPAIGN_TYPES_FAILURE = '[Campaign Types] Get Campaign Types Failure';
export const SET_CAMPAIGN_TYPE_ID = '[Campaign Types] Set Campaign Type Id';

export const GET_KEYWORDS = '[Keywords] Get Keywords';
export const GET_KEYWORDS_SUCCESS = '[Keywords] Get Keywords Success';
export const GET_KEYWORDS_FAILURE = '[Keywords] Get Keywords Failure';
export const SET_PRODUCTS_KEYWORDS = '[Product Keywords] Set Product Keywords';

export const GET_CAMPAIGNS = '[Campaigns] Get Campaigns';
export const GET_CAMPAIGNS_SUCCESS = '[Campaigns] Get Campaigns Success';
export const GET_CAMPAIGNS_FAILURE = '[Campaigns] Get Campaigns Failure';

/**
 * Get all campaign types from api
 */
export const getCampaignTypes = createAction(
  GET_CAMPAIGN_TYPES
);

/**
 * Set campaignTypes in store
 */
export const getCampaignTypesSuccess = createAction(
  GET_CAMPAIGN_TYPES_SUCCESS,
  props<any>()
);

/**
 * Get Error from api/campaign-type end point
 */
export const getCampaignTypesFailure = createAction(
  GET_CAMPAIGN_TYPES_FAILURE,
  props<{ any: any }>()
);

/**
 * Set selected campaign type id in store
 */
export const setCampaignTypeID = createAction(
  SET_CAMPAIGN_TYPE_ID,
  props<{ id: any }>()
);

/**
 * Get all defined keywords from api
 */
export const getKeywords = createAction(
  GET_KEYWORDS
);

/**
 * Set keywords in store
 */
export const getKeywordsSuccess = createAction(
  GET_KEYWORDS_SUCCESS,
  props<any>()
);

/**
 * Get Error from api/keywords end point
 */
export const getKeywordsFailure = createAction(
  GET_KEYWORDS_FAILURE,
  props<{ any: any }>()
);

/**
 * Set selected campaign type id in store
 */
export const setProductKeywords = createAction(
  SET_PRODUCTS_KEYWORDS,
  props<{ keywords: any }>()
);

/**
 * Get all defined campaigns from api
 */
export const getCampaigns = createAction(
  GET_CAMPAIGNS
);

/**
 * Set all defined campaigns in store
 */
export const getCampaignsSuccess = createAction(
  GET_CAMPAIGNS_SUCCESS,
  props<any>()
);

/**
 * Get Error from api/campaigns end point
 */
export const getCampaignsFailure = createAction(
  GET_CAMPAIGNS_FAILURE,
  props<{ any: any }>()
);
