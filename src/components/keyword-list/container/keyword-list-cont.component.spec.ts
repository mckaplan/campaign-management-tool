import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordListContComponent } from './keyword-list-cont.component';
import { SharedModule } from 'src/components/shared';
import { ReplaySubject } from 'rxjs';
import { KeywordListPresModule } from '../presenter';
import { KeywordAddDialogPresModule } from '../subcomponent';
import { Keyword } from '../../../models/keyword.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';

describe('KeywordListContComponent', () => {
  let component: KeywordListContComponent;
  let fixture: ComponentFixture<KeywordListContComponent>;

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
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KeywordListContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create KeywordListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should show keywordList after save button is clicked ', async () => {
    let mockData: Keyword[] = [{
      name: 'test',
      bid: 0,
      suggestedBid: 2,
      matchType: 'Exact'
    }];

    afterClosedSubject$.next(['test']);
    await component.addKeywordList(null);
    fixture.detectChanges();

    expect(mockDialog.open).toHaveBeenCalled();
    component.keywordList.subscribe((result) => {
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
});
