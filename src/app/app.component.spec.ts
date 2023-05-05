import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserModule, } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { CampaignListContModule, SharedModule, KeywordListContModule } from 'src/components';
import { CampaignTypeContModule } from 'src/components/campaign-type';
import { ProductsAndAdGroupContModule } from 'src/components/products-and-ad-group';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        KeywordListContModule,
        CampaignListContModule,
        CampaignTypeContModule,
        SharedModule,
        ProductsAndAdGroupContModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
