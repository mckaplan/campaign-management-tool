import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CampaignDetailContModule, CampaignListContModule, KeywordListContModule, ProductsAndAdGroupContModule, SharedModule } from 'src/components';
import { CampaignTypeContModule } from 'src/components/campaign-type';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { CampaignStoreModule, metaReducers, reducers } from 'src/store';
import { EffectsModule } from '@ngrx/effects';
import { CampaignServiceModule, ProductServiceModule } from 'src/services';
import { HeaderContModule } from './header';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    KeywordListContModule,
    CampaignListContModule,
    CampaignTypeContModule,
    SharedModule,
    CampaignDetailContModule,
    ProductsAndAdGroupContModule,
    HeaderContModule,
    CampaignStoreModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([]),
    CampaignServiceModule,
    ProductServiceModule,
  ],
  exports: [SharedModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
