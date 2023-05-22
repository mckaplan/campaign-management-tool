import { CampaignState, campaignReducer } from './campaign.reducer';
import * as campaignActions from './campaign.actions';

describe('Campaign Store reducer', () => {
  const initialCampaignState: CampaignState = {
    campaignTypes: [],
    keywords: [],
    productKeywords: [],
    campaigns: [],
    currentCampaignID: 0,
    isLoading: false,
    isLoadingFailure: false,
    isLoadingSuccess: false
  };

  const mockCampaignType = {
    payload: [
      {
        name: 'Sponsored Products',
        details: 'Promote products to shoppers actively searching with related keywords',
        id: 1,
        url: 'http://www.products.com'
      }
    ]
  };

  const mockKeywords = {
    payload: [
      {
        name: 'test1',
        bid: 2
      },
      {
        name: 'test2',
        bid: 3
      }
    ]
  };

  const mockProductKeywords = [{
    name: 'test1',
    bid: 0,
    suggestedBid: 2,
    matchType: 'Exact',
    isActive: true
  },
  {
    name: 'test2',
    bid: 0,
    suggestedBid: 4,
    matchType: 'Exact',
    isActive: true
  }];

  const mockCampaigns = {
    payload: [
      {
        campaignName: 'Holiday Favorites1',
        dailyBudget: 3,
        startDate: new Date(),
        endDate: new Date()
      },
      {
        campaignName: 'Holiday Favorites2',
        dailyBudget: 5,
        startDate: new Date(),
        endDate: new Date()
      },
    ]
  };

  it('should by default return the initial state', () => {
    const state = campaignReducer(initialCampaignState, { type: 'fake' } as any);

    expect(state).toEqual(initialCampaignState);
  });

  it('should set campaign type in state coming form Api', () => {
    const state = campaignReducer(initialCampaignState, campaignActions.getCampaignTypesSuccess(mockCampaignType));
    const campaignName = state.campaignTypes?.[0].name;

    expect(campaignName).toEqual('Sponsored Products');
  });

  it('should set selected current campaign id in state', () => {
    const state = campaignReducer(initialCampaignState, campaignActions.setCampaignTypeID({ id: 1 }));

    expect(state.currentCampaignID).toEqual(1);
  });

  it('should set defined keywords in state coming form Api', () => {
    const state = campaignReducer(initialCampaignState, campaignActions.getKeywordsSuccess(mockKeywords));
    const bid = state.keywords?.[1].bid;

    expect(bid).toEqual(3);
  });

  it('should set keywords of products in state', () => {
    const state = campaignReducer(initialCampaignState, campaignActions.setProductKeywords({ keywords: mockProductKeywords }));

    expect(state.productKeywords?.length).toEqual(2);
  });

  it('should set defined campaigns in state coming form Api', () => {
    const state = campaignReducer(initialCampaignState, campaignActions.getCampaignsSuccess(mockCampaigns));

    expect(state.campaigns?.length).toEqual(2);
  });
});
