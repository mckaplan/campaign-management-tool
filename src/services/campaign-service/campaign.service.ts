import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CampaignType, Keyword } from "src/models";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Injectable()
export class CampaignService {
  constructor(private http: HttpClient) {

  }

  getAllCampaignTypes() : Observable<CampaignType[]> {
    return this.http.get<CampaignType[]>('api/campaign-type')
    .pipe(
      map(res=> res),
      shareReplay()
    )
  }

  getKeywords() : Observable<Keyword[]> {
    return this.http.get<Keyword[]>('api/keywords')
    .pipe(
      map(res=> res),
      shareReplay()
    )
  }

  getCampaigns() : Observable<Keyword[]> {
    return this.http.get<Keyword[]>('api/campaigns')
    .pipe(
      map(res=> res),
      shareReplay()
    )
  }
}
