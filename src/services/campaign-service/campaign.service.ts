import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CampaignType, Keyword } from "src/models";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Injectable()
export class CampaignService {
  constructor(private http: HttpClient) {}

  /**
   * Retrieve data of campaign type from api
   * @returns campaign type list
   */
  getAllCampaignTypes() : Observable<CampaignType[]> {
    return this.http.get<CampaignType[]>('api/campaign-type')
    .pipe(
      map(res=> res),
      shareReplay()
    )
  }

  /**
   * Retrieve data of keywords from api
   * @returns keyword list
   */
  getKeywords() : Observable<Keyword[]> {
    return this.http.get<Keyword[]>('api/keywords')
    .pipe(
      map(res=> res),
      shareReplay()
    )
  }

  /**
   * Retrieve data of campaigns from api
   * @returns campaign list
   */
  getCampaigns() : Observable<Keyword[]> {
    return this.http.get<Keyword[]>('api/campaigns')
    .pipe(
      map(res=> res),
      shareReplay()
    )
  }
}
