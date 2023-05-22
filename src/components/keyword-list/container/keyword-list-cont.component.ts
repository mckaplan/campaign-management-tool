import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KeywordAddDialogPresComponent } from '../subcomponent/keyword-add-dialog/keyword-add-dialog-pres.component';
import { BehaviorSubject, Observable, filter, map, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { getKeywords, setProductKeywords, selectAllKeywords, selectProductKeywords } from '../../../store';
import { Keyword, ProductKeyword } from 'src/models';

@Component({
  selector: 'app-keyword-list-cont',
  templateUrl: './keyword-list-cont.component.html',
  styleUrls: ['./keyword-list-cont.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeywordListContComponent implements OnInit {
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

  constructor(
    private readonly dialog: MatDialog,
    private readonly store: Store
  ) {
    this.store.dispatch(getKeywords());

    this.store.select(selectAllKeywords)
      .pipe(
        filter((val) => !! val.keywords && val.keywords?.length > 0),
        map((val) => val.keywords),
        take(1)
      )
      .subscribe((keywords) => {
        this.keywords = keywords!;
      });
  }

  ngOnInit(): void {

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
   * @param e event value      y
   */
  public continueButton(e: any) {

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
    this.store.select(selectProductKeywords)
      .pipe(take(1))
      .subscribe(res => {
        let filterKey: ProductKeyword[] = [];
        res.productKeywords!.forEach((val) => {
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
