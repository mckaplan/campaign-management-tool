import { CampaignState, campaignReducer } from './campaign.reducer';
import * as campaignActions from './campaign.actions';

describe('Campaign Store reducer', () => {
  const initialCampaignState: CampaignState = {
    campaignTypes: [],
    keywords: [],
    selectedProductKeywords: [],
    campaigns: [],
    selectedCampaignID: 0
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

  const mockAdGroupProducts = {
    payload: [
      { id: 1, name: 'Product 1', price: 10, stock: 'In Stock', SKU: 'PM_1010', added: false },
      { id: 2, name: 'Product 2', price: 20, stock: 'In Stock', SKU: 'PM_1010', added: false },
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

    expect(state.selectedCampaignID).toEqual(1);
  });

  it('should set selected current campaign id in state', () => {
    const result = {
      campaignName: 'test',
      dailyBudget: 123,
      startDate: new Date(),
      endDate: new Date()
    };

    const state = campaignReducer(initialCampaignState, campaignActions.setCampaignDetail({ detail:  result}));

    expect(state.selectedCampaignDetail).toEqual(result);
  });

  it('should set defined keywords in state coming form Api', () => {
    const state = campaignReducer(initialCampaignState, campaignActions.getKeywordsSuccess(mockKeywords));
    const bid = state.keywords?.[1].bid;

    expect(bid).toEqual(3);
  });

  it('should set keywords of products in state', () => {
    const state = campaignReducer(initialCampaignState, campaignActions.setProductKeywords({ keywords: mockProductKeywords }));

    expect(state.selectedProductKeywords?.length).toEqual(2);
  });

  it('should set defined campaigns in state coming form Api', () => {
    const state = campaignReducer(initialCampaignState, campaignActions.getCampaignsSuccess(mockCampaigns));

    expect(state.campaigns?.length).toEqual(2);
  });

  it('should set defined ad group products in state coming form Api', () => {
    const state = campaignReducer(initialCampaignState, campaignActions.getAdGroupProductsSuccess(mockAdGroupProducts));

    expect(state.adGroupProducts?.length).toEqual(2);
  });
});
