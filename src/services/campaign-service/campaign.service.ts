import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Campaign, CampaignType, Keyword, Product } from "src/models";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Response } from '../../models';

@Injectable()
export class CampaignService {
  constructor(private http: HttpClient) {}

  /**
   * Retrieve data of campaign type from api
   * @returns campaign type list
   */
  getAllCampaignTypes() : Observable<Response<CampaignType>> {
    return this.http.get<Response<CampaignType>>('api/campaign-type')
    .pipe(
      map(res=> res),
      shareReplay()
    )
  }

  /**
   * Retrieve data of keywords from api
   * @returns keyword list
   */
  getKeywords() : Observable<Response<Keyword>> {
    return this.http.get<Response<Keyword>>('api/keywords')
    .pipe(
      map(res=> res),
      shareReplay()
    )
  }

  /**
   * Retrieve data of campaigns from api
   * @returns campaign list
   */
  getCampaigns() : Observable<Response<Campaign>> {
    return this.http.get<Response<Campaign>>('api/campaigns')
    .pipe(
      map(res=> res),
      shareReplay()
    )
  }

  /**
   * Retrieve data of products from api
   * @returns product list
   */
  getProducts() : Observable<Response<Product>> {
    return this.http.get<Response<Product>>('api/ad-group-product')
    .pipe(
      map(res=> res),
      shareReplay()
    )
  }
}
