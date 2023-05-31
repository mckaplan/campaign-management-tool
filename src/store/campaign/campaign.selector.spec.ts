import { getCampaignState, getCurrentCampaignId, selectAllAdGroupProducts, selectAllCampaignTypes, selectAllKeywords, selectCampaigns, selectProductKeywords } from "./campaign.selectors";


describe('Campaign Store Selector test', () => {
  const mockCampaignType = [
    {
      name: 'Sponsored Products',
      details: 'Promote products to shoppers actively searching with related keywords',
      id: 1,
      url: 'http://www.products.com'
    }
  ];

  const mockKeywords = [
    {
      name: 'test1',
      bid: 2
    },
    {
      name: 'test2',
      bid: 3
    }
  ];

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

  const mockCampaigns = [
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
    }
  ];

  const mockAdGroupProducts = [
    { id: 1, name: 'Product 1', price: 10, stock: 'In Stock', SKU: 'PM_1010', added: false },
    { id: 2, name: 'Product 2', price: 20, stock: 'In Stock', SKU: 'PM_1010', added: false },
  ];

  const fakeStore = {
    campaign:
    {
      campaignTypes: mockCampaignType,
      keywords: mockKeywords,
      productKeywords: mockProductKeywords,
      campaigns: mockCampaigns,
      adGroupProducts: mockAdGroupProducts,
      adGroupAndProducts: { adGroupName: 'test', products: mockAdGroupProducts },
      currentCampaignID: 3,
      isLoading: false,
      isLoadingFailure: false,
      isLoadingSuccess: false
    },
  } as any;

  it('should return the url in the state', () => {
    expect(getCampaignState.projector(fakeStore)).toEqual(fakeStore);
  });

  it('should return all defined campaignType', () => {
    const state = selectAllCampaignTypes.projector(fakeStore.campaign);

    expect(state.campaignTypes?.length).toEqual(1);
  });

  it('should return selected current campaign id', () => {
    const state = getCurrentCampaignId.projector(fakeStore.campaign);

    expect(state.currentCampaignID).toEqual(3);
  });

  it('should return defined keywords from api', () => {
    const state = selectAllKeywords.projector(fakeStore.campaign);

    expect(state.keywords?.length).toEqual(2);
  });

  it('should return product keywords list', () => {
    const state = selectProductKeywords.projector(fakeStore.campaign);

    expect(state.productKeywords?.length).toEqual(2);
  });

  it('should return all defined campaigns', () => {
    const state = selectCampaigns.projector(fakeStore.campaign);

    expect(state.campaigns?.length).toEqual(2);
  });

  it('should return all defined ad group products', () => {
    const state = selectAllAdGroupProducts.projector(fakeStore.campaign);

    expect(state.adGroupProducts?.length).toEqual(2);
  });
});
