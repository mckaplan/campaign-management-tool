import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CampaignListContModule, KeywordListContModule, SharedModule } from 'src/components';
import { CampaignTypeContModule } from 'src/components/campaign-type';

import { CampaignDetailContModule } from 'src/components/campaign-detail/container/campaign-detail-cont.module';
import { ProductsAndAdGroupContModule } from 'src/components/products-and-ad-group/container/products-and-ad-group-cont.module';
import { ProductsPresModule } from 'src/components/products-and-ad-group';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    KeywordListContModule,
    CampaignListContModule,
    CampaignTypeContModule,
    SharedModule,
    CampaignDetailContModule,
    ProductsAndAdGroupContModule,
    ProductsPresModule
  ],
  exports:[SharedModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AppComponent]
})
export class AppModule { }
