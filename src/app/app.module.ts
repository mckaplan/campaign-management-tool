import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { CampaignStoreModule, metaReducers, reducers } from 'src/store';
import { EffectsModule } from '@ngrx/effects';
import { CampaignServiceModule, ErrorServiceModule } from 'src/services';
import { HeaderContModule } from './header';
import { SharedMaterialModule } from 'src/components';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderContModule,
    CampaignStoreModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([]),
    CampaignServiceModule,
    ErrorServiceModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
