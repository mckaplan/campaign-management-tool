import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordListPresComponent } from './keyword-list-pres.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/components/shared';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('KeywordListPresComponent', () => {
  let component: KeywordListPresComponent;
  let fixture: ComponentFixture<KeywordListPresComponent>;
  const mockData = [{
    name: 'test',
    bid: 0,
    suggestedBid: 2,
    matchType: 'Exact'
  },
  {
    name: 'test1',
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
        ReactiveFormsModule,
        SharedModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KeywordListPresComponent);
    component = fixture.componentInstance;
    component.keywordList = mockData;
    fixture.detectChanges();
  });

  it('should create KeywordListPresComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display keyword list', () => {
    const elems = fixture.debugElement.queryAll(By.css('.keyword'));

    expect(elems.length).toBe(2);
    expect(elems[1].query(By.css('#name')).nativeElement.value).toBe('test1');
    expect(elems[1].query(By.css('#matchType')).nativeElement.value).toBe('Exact');
    expect(elems[1].query(By.css('#bid')).nativeElement.value).toBe('0');
  });

  it('should remove keyword item', () => {
    component.removeKeyword(1);
    fixture.detectChanges();
    const elems = fixture.debugElement.queryAll(By.css('.keyword'));

    expect(elems.length).toBe(1);
  });

  it('should set suggested bid for keyword item', () => {
    component.setSuggestedBid(1, 4);
    fixture.detectChanges();
    const elems = fixture.debugElement.queryAll(By.css('.keyword'));

    expect(elems[1].query(By.css('#bid')).nativeElement.value).toBe('4');
  });
});
