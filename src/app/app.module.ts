import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CampaignListContModule, KeywordListContModule, SharedModule } from 'src/components';
import { CampaignTypeContModule } from 'src/components/campaign-type';


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
    SharedModule
  ],
  exports:[SharedModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AppComponent]
})
export class AppModule { }
