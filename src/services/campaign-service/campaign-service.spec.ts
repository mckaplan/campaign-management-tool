import { CampaignService } from "./campaign.service";
import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CampaignService', () => {
  let service: CampaignService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CampaignService,
      ]
    });

    service = TestBed.inject(CampaignService);
    httpMock = TestBed.inject(HttpTestingController);
  });


  afterEach(() => {
    httpMock.verify();
  });

  it('getAllCampaignTypes', () => {
    const mockCampaignTypes = {
      payload: [
        {
          name: 'Sponsored Products',
          details: 'Promote products to shoppers actively searching with related keywords',
          id: 1,
          url: 'http://www.products.com'
        },
        {
          name: 'Sponsored Brands',
          details: 'Help shoppers discover your brand and product',
          id: 2,
          url: 'http://www.brand.com'
        }
      ]
    }

    service.getAllCampaignTypes().subscribe(res => {

      expect(res).toEqual(mockCampaignTypes);
    });

    const req = httpMock.expectOne('api/campaign-type');
    expect(req.request.method).toBe("GET");
    req.flush(mockCampaignTypes);
  });

  it('getKeywords', () => {
    const mockKeywords = {
      payload: [
        {
          name: 'test1',
          bid: 2
        },
        {
          name: 'test2',
          bid: 4
        }
      ]
    }

    service.getKeywords().subscribe(res => {

      expect(res).toEqual(mockKeywords);
    });

    const req = httpMock.expectOne('api/keywords');
    expect(req.request.method).toBe("GET");
    req.flush(mockKeywords);
  });

  it('getCampaigns', () => {
    const mockCampaigns = {
      payload: [
        {
          name: 'Holiday Favorites1',
          dailyBudget: 3,
          startDate: new Date(),
          endDate: new Date(),
          status: 'running',
          acos: 7,
          clicks: 5,
          impression: 3
        }
      ]
    };

    service.getCampaigns().subscribe(res => {

      expect(res).toEqual(mockCampaigns);
    });

    const req = httpMock.expectOne('api/campaigns');
    expect(req.request.method).toBe("GET");
    req.flush(mockCampaigns);
  });

  it('getProducts', () => {
    const mockProducts = {
      payload: [
        {
          id: 1,
          name: 'Product 1',
          price: 100,
          stock: 'In Stock',
          SKU: 'SKU_1010',
          added: false,
        }
      ]
    };

    service.getProducts().subscribe(res => {

      expect(res).toEqual(mockProducts);
    });

    const req = httpMock.expectOne('api/ad-group-product');
    expect(req.request.method).toBe("GET");
    req.flush(mockProducts);
  });
});
