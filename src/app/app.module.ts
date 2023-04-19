import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CampaignListContModule, KeywordListContModule, SharedModule } from 'src/components';


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
    SharedModule
  ],
  exports:[SharedModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AppComponent]
})
export class AppModule { }
