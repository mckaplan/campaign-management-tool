import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KeywordAddDialogPresComponent } from '../subcomponent/keyword-add-dialog/keyword-add-dialog-pres.component';
import { BehaviorSubject, Observable, Subscription, filter, map, take } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getKeywords, setProductKeywords, selectAllKeywords, selectProductKeywords, selectError } from '../../../store';
import { Keyword, ProductKeyword } from 'src/models';
import { Router } from '@angular/router';
import { ErrorService } from 'src/services';

@Component({
  selector: 'app-keyword-list-cont',
  templateUrl: './keyword-list-cont.component.html',
  styleUrls: ['./keyword-list-cont.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeywordListContComponent implements OnInit, OnDestroy {
  /**
   *  product keyword list subject
   */
  private productKeywordsSubject = new BehaviorSubject<ProductKeyword[]>([]);

  /**
   * keyword list object to show list
   */
  public productKeywords: Observable<ProductKeyword[]> = this.productKeywordsSubject.asObservable();

  /**
   * keywrod obj to send dialog
   */
  productKeywordsDialog: string[] | undefined;

  /**
   * Store defined keywords in DB
   */
  private keywords: Keyword[];

  /**
   * List of subscriptions to unsubscribe on destroy
   */
  private subscriptions: Subscription[] = [];

  constructor(
    private readonly dialog: MatDialog,
    private readonly store: Store,
    private errorService: ErrorService,
    private router: Router,
  ) {
    this.store.dispatch(getKeywords());

    this.subscriptions.push(
      this.store.pipe(select(selectAllKeywords))
        .pipe(
          filter((val) => !!val.keywords && val.keywords?.length > 0),
          map((val) => val.keywords),
          take(1)
        )
        .subscribe((keywords) => {
          this.keywords = keywords!;
        }),
      this.store.pipe(select(selectError))
        .pipe(
          filter((err) => !!err.error),
        ).subscribe(res => {
          this.errorService.showErrorMessages(res.error!);
        })
    );
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.errorService.clearErrorMessages();
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  /**
   * Set keywordlist object that return data from dialog
   * @param e event value
   */
  public async addKeywordList(e: any) {
    const dialogRef = this.dialog.open(KeywordAddDialogPresComponent, {
      data: { keyword: this.productKeywordsDialog }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.setProductKeywords(result);
      }
    });
  }

  /**
   * Setup object to show list data coming form dialog
   * @param keywordsList set object for list
   */
  private async setProductKeywords(productKeywords: string[]) {
    let keywordObjs: ProductKeyword[] = [];

    productKeywords.forEach((value) => {
      keywordObjs.push({
        name: value,
        bid: 0,
        suggestedBid: this.setBid(value),
        matchType: 'Exact',
        isActive: true
      } as ProductKeyword);
    });

    this.store.dispatch(setProductKeywords({
      keywords: keywordObjs
    }));

    this.productKeywordsSubject.next(keywordObjs);
  }

  /**
   *
   * @param keywordName name of keyword
   * @returns keyword bid number
   */
  private setBid(keywordName: string) {
    const keyword = this.keywords.find((keyword) => keyword.name == keywordName);
    return keyword ? keyword.bid : 0;
  }

  /**
   * redirect to next page
   * @param e event value
   */
  public continueButton(e: any) {
    if (this.productKeywordsSubject.value.length) {
      this.router.navigate(['/campaign-list']);
    }
    else {
      this.errorService.showErrorMessages('Please add keywords');
    }
  }

  /**
   * redirect to previous page
   * @param e event value
   */
  public cancelButton(e: any) {

  }

  /**
   * search input change
   * @param e event value
   */
  public searchInputChanged(search: any) {
    this.store.pipe(select(selectProductKeywords))
      .pipe(take(1))
      .subscribe(res => {
        let filterKey: ProductKeyword[] = [];
        res.selectedProductKeywords!.forEach((val) => {
          let obj = Object.assign({}, val);
          obj.isActive = obj.name.indexOf(search) > -1;
          filterKey.push(obj);
        });

        this.store.dispatch(setProductKeywords({ keywords: filterKey }));
        this.productKeywordsSubject.next(filterKey);
      });
  }

  /**
   * get products key and save in store
   * @param keywords product's keywords
   */
  public getProductKeywords(keywords: any) {

    this.store.dispatch(setProductKeywords({ keywords }));
  }
}
