import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeywordItemPresComponent } from './keyword-item-pres.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/components/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('KeywordItemPresComponent', () => {
  let component: KeywordItemPresComponent;
  let fixture: ComponentFixture<KeywordItemPresComponent>;
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
      declarations: [KeywordItemPresComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KeywordItemPresComponent);
    component = fixture.componentInstance;
    component.keywordsList = mockData;
    fixture.detectChanges();
  });

  it('should create', () => {
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
