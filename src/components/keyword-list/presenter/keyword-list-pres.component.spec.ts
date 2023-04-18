import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordListPresComponent } from './keyword-list-pres.component';
import { CommonModule } from '@angular/common';
import { KeywordItemPresModule } from '../subcomponent';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/components/shared';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Keyword } from '../model/keyword.model';

describe('KeywordListPresComponent', () => {
  let component: KeywordListPresComponent;
  let fixture: ComponentFixture<KeywordListPresComponent>;
  let mockData: Keyword[] = [{
    name: 'test',
    bid: 0,
    suggestedBid: 2,
    matchType: 'Exact'
  }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeywordListPresComponent],
      imports: [
        CommonModule,
        BrowserModule,
        KeywordItemPresModule,
        ReactiveFormsModule,
        SharedModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KeywordListPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create KeywordListPresComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display action-group, buttons-group and warning notification components  ', () => {
    component.keywordList = null;
    fixture.detectChanges();
    const elem = fixture.debugElement.nativeElement;

    expect(elem.querySelector('#keyword-action-group')).toBeTruthy();
    expect(elem.querySelector('#buttons-group')).toBeTruthy();
    expect(elem.querySelector('#notification')).toBeTruthy();
  });

  it('should display keywordItemsPres components  ', () => {
    component.keywordList = mockData;
    fixture.detectChanges();
    const elem = fixture.debugElement.nativeElement;

    expect(elem.querySelector('app-keyword-item-pres')).toBeTruthy();
  });
});
