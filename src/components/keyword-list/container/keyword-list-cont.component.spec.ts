import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordListContComponent } from './keyword-list-cont.component';
import { SharedModule } from 'src/components/shared';
import { ReplaySubject } from 'rxjs';
import { KeywordListPresModule } from '../presenter';
import { KeywordAddDialogPresModule } from '../subcomponent';
import { ProductKeyword } from '../../../models/product-keyword.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { selectAllKeywords, selectProductKeywords, setProductKeywords } from 'src/store';

describe('KeywordListContComponent', () => {
  let component: KeywordListContComponent;
  let fixture: ComponentFixture<KeywordListContComponent>;
  let mockStore: MockStore;
  let mockKeywords = {
    keywords: [
      {
        name: 'test1',
        bid: 2
      },
      {
        name: 'test2',
        bid: 4
      }
    ]
  };

  let mockProductKeywordss = {
    productKeywords: [{
      name: 'test1',
      bid: 0,
      suggestedBid: 2,
      matchType: 'Exact',
      isActive: true
    },
    {
      name: 'test2',
      bid: 0,
      suggestedBid: 4,
      matchType: 'Exact',
      isActive: true
    }
  ]};

  const afterClosedSubject$ = new ReplaySubject(1);
  const mockDialog = {
    open: jasmine.createSpy('open').and.returnValue({
      afterClosed: () => afterClosedSubject$.asObservable()
    })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        KeywordListContComponent
      ],
      imports: [
        SharedModule,
        KeywordListPresModule,
        KeywordAddDialogPresModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MatDialog, useValue: mockDialog },
        provideMockStore()
      ]
    })
      .compileComponents();

    mockStore = TestBed.inject(MockStore);
    mockStore.dispatch = jasmine.createSpy('dispatch');
    mockStore.overrideSelector(selectAllKeywords, mockKeywords);
    mockStore.overrideSelector(selectProductKeywords, mockProductKeywordss);
    mockStore.refreshState();
    fixture = TestBed.createComponent(KeywordListContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create KeywordListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should show keywordList after save button is clicked ', async () => {
    let mockData: ProductKeyword[] = [{
      name: 'test1',
      bid: 0,
      suggestedBid: 2,
      matchType: 'Exact',
      isActive: true
    }];

    afterClosedSubject$.next(['test1']);
    await component.addKeywordList(null);
    fixture.detectChanges();

    expect(mockDialog.open).toHaveBeenCalled();

    expect(mockStore.dispatch).toHaveBeenCalledWith(setProductKeywords({
      keywords: mockData
    }));
    component.productKeywords.subscribe((result) => {
      expect(result).toEqual(mockData);
    })
  });

  it('should display action-group, buttons-group and warning notification components  ', () => {
    fixture.detectChanges();
    const elem = fixture.debugElement.nativeElement;

    expect(elem.querySelector('#keyword-action-group')).toBeTruthy();
    expect(elem.querySelector('#buttons-group')).toBeTruthy();
    expect(elem.querySelector('#notification')).toBeTruthy();
  });

  it('should get keywords changes after keywords are updated ', async () => {
    let mockData: ProductKeyword[] = [{
      name: 'test1',
      bid: 0,
      suggestedBid: 2,
      matchType: 'Exact',
      isActive: true
    }];

    await component.getProductKeywords(mockData);
    fixture.detectChanges();


    expect(mockStore.dispatch).toHaveBeenCalledWith(setProductKeywords({
      keywords: mockData
    }));
  });

  it('should search input text to find keyword being active in the list ', async () => {
    const searchInput = 'test2';
    let mockData: ProductKeyword[] = [{
      name: 'test1',
      bid: 0,
      suggestedBid: 2,
      matchType: 'Exact',
      isActive: false
    },
    {
      name: 'test2',
      bid: 0,
      suggestedBid: 4,
      matchType: 'Exact',
      isActive: true
    }
    ];
    await component.searchInputChanged(searchInput);
    fixture.detectChanges();

    component.productKeywords.subscribe((result) => {
      expect(result).toEqual(mockData);
    });
  });
});
