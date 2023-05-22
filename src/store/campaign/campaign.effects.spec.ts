import { TestBed, getTestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { CampaignEffects } from "./campaign.effects";
import { ReplaySubject, Subject, Subscription, of, throwError } from "rxjs";
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from "@ngrx/store";
import { CampaignService } from "src/services";
import { getCampaignTypes, getCampaigns, getKeywords } from "./campaign.actions";
import { HttpClientModule } from "@angular/common/http";

describe('Campaign Effects', () => {

  beforeAll(() => getTestBed().platform || TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting()));

  let effect: CampaignEffects;
  let actions: Subject<any>;
  const subscriptions: Subscription[] = [];
  let campaignService: CampaignService;
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
      }
    ]
  };

  const mockCampaigns = {
    payload: [
      {
        campaignName: 'Holiday Favorites1',
        dailyBudget: 3,
        startDate: new Date(),
        endDate: new Date()
      }
    ]
  };

  afterEach(() => subscriptions.forEach((subscription) => subscription.unsubscribe()));

  beforeEach(async () => {
    actions = new ReplaySubject(1);
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        CampaignEffects,
        provideMockActions(() => actions),
        CampaignService,
      ]
    }).compileComponents();

    effect = TestBed.inject(CampaignEffects);
    campaignService = TestBed.inject(CampaignService);
  });

  it('Check if effect is correctly injected', () => {
    expect(effect).toBeDefined();
  });

  it('should return getCampaignTypesSuccess action', () => {
    actions.next(getCampaignTypes());
    campaignService.getAllCampaignTypes = jasmine.createSpy('getAllCampaignTypes').and.returnValue(of(mockCampaignType));

    subscriptions.push(effect.getAllCampaignTypes$.subscribe(
      (setFromApiAction: any) => {
        expect(setFromApiAction.type).toBe('[Campaign Types] Get Campaign Types Success');
        expect(setFromApiAction.payload).toEqual(mockCampaignType.payload);
      }
    ));
  });

  it('should return getCampaignTypesFailure action', () => {
    actions.next(getCampaignTypes());
    campaignService.getAllCampaignTypes = jasmine.createSpy('getAllCampaignTypes').and.returnValue(throwError(() => 'error'));

    subscriptions.push(effect.getAllCampaignTypes$.subscribe(
      (setFromApiAction: any) => {
        expect(setFromApiAction.type).toBe('[Campaign Types] Get Campaign Types Failure');
      }
    ));
  });

  it('should return getKeywordsSuccess action', () => {
    actions.next(getKeywords());
    campaignService.getKeywords = jasmine.createSpy('getKeywords').and.returnValue(of(mockKeywords));

    subscriptions.push(effect.getKeywords$.subscribe(
      (setFromApiAction: any) => {
        expect(setFromApiAction.type).toBe('[Keywords] Get Keywords Success');
        expect(setFromApiAction.payload).toEqual(mockKeywords.payload);
      }
    ));
  });

  it('should return getKeywordsFailure action', () => {
    actions.next(getKeywords());
    campaignService.getKeywords = jasmine.createSpy('getKeywords').and.returnValue(throwError(() => 'error'));

    subscriptions.push(effect.getKeywords$.subscribe(
      (setFromApiAction: any) => {
        expect(setFromApiAction.type).toBe('[Keywords] Get Keywords Failure');
      }
    ));
  });

  it('should return getCampaignsSuccess action', () => {
    actions.next(getCampaigns());
    campaignService.getCampaigns = jasmine.createSpy('getCampaigns').and.returnValue(of(mockCampaigns));

    subscriptions.push(effect.getCampaigns$.subscribe(
      (setFromApiAction: any) => {
        expect(setFromApiAction.type).toBe('[Campaigns] Get Campaigns Success');
        expect(setFromApiAction.payload).toEqual(mockCampaigns.payload);
      }
    ));
  });

  it('should return getCampaignsFailure action', () => {
    actions.next(getCampaigns());
    campaignService.getCampaigns = jasmine.createSpy('getCampaigns').and.returnValue(throwError(() => 'error'));

    subscriptions.push(effect.getCampaigns$.subscribe(
      (setFromApiAction: any) => {
        expect(setFromApiAction.type).toBe('[Campaigns] Get Campaigns Failure');
      }
    ));
  });
});
