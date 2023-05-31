import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import * as campaignActions from './campaign.actions';
import { CampaignService, ProductService } from "../../services";


@Injectable()
export class CampaignEffects {

  constructor(
    private actions$: Actions,
    private campaignService: CampaignService,
    private productService: ProductService
  ) {}

  /**
   * Set campaignTypes of State with reply content, dispatch getCampaignTypesFailure if it catches a failure
   */
  getAllCampaignTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(campaignActions.getCampaignTypes),
      exhaustMap(action =>
        this.campaignService.getAllCampaignTypes().pipe(
          map(response => {
            return campaignActions.getCampaignTypesSuccess(response)
          }),
          catchError((error: any) => of(campaignActions.getCampaignTypesFailure(error))))
      )
    )
  );

  /**
   * Set campaignTypes of State with reply content, dispatch getCampaignTypesFailure if it catches a failure
   */
  getKeywords$ = createEffect(() =>
    this.actions$.pipe(
      ofType(campaignActions.getKeywords),
      exhaustMap(action =>
        this.campaignService.getKeywords().pipe(
          map(response => {
            return campaignActions.getKeywordsSuccess(response)
          }),
          catchError((error: any) => of(campaignActions.getKeywordsFailure(error))))
      )
    )
  );

  /**
   * Set campaigns of State with reply content, dispatch getCampaignsFailure if it catches a failure
   */
  getCampaigns$ = createEffect(() =>
    this.actions$.pipe(
      ofType(campaignActions.getCampaigns),
      exhaustMap(action =>
        this.campaignService.getCampaigns().pipe(
          map(response => {
            return campaignActions.getCampaignsSuccess(response)
          }),
          catchError((error: any) => of(campaignActions.getCampaignsFailure(error))))
      )
    )
  );

  /**
   * Set ad group products of State with reply content, dispatch getAdGroupProductsFailure if it catches a failure
   */
  getAdGroupProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(campaignActions.getAdGroupProducts),
      exhaustMap(action =>
        this.productService.getProducts().pipe(
          map(response => {
            return campaignActions.getAdGroupProductsSuccess(response)
          }),
          catchError((error: any) => of(campaignActions.getAdGroupProductsFailure(error))))
      )
    )
  );
}
