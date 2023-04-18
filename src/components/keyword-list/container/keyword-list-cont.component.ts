import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KeywordAddDialogPresComponent } from '../subcomponent/keyword-add-dialog/keyword-add-dialog-pres.component';
import { Observable, Subject } from 'rxjs';
import { Keyword } from '../model/keyword.model';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-keyword-list-cont',
  templateUrl: './keyword-list-cont.component.html',
  styleUrls: ['./keyword-list-cont.component.scss']
})
export class KeywordListContComponent implements OnInit {
  /**
   *  keyword list subject
   */
  private keywordListSubject = new Subject<Keyword[]>();

  /**
   * keyword list object to show list
   */
  public keywordList: Observable<Keyword[]> = this.keywordListSubject.asObservable();

  /**
   * keywrod obj to send dialog
   */
  keyword: string[] | undefined;

  constructor(
    private readonly dialog: MatDialog,
  ) { }

  ngOnInit(): void {

  }

  /**
   * Set keywordlist object that return data from dialog
   * @param e event value
   */
  public async addKeywordList(e: any) {
    const dialogRef = this.dialog.open(KeywordAddDialogPresComponent, {
      data: { keyword: this.keyword }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.setKeywordList(result);
      }
    });
  }

  /**
   * Setup object to show list data coming form dialog
   * @param keywordsList set object for list
   */
  private async setKeywordList(keywordsList: string[]) {
    let keywordObjs: Keyword[] = [];

    keywordsList.forEach((value) => {
      keywordObjs.push({
        name: value,
        bid: 0,
        suggestedBid: 2,
        matchType: 'Exact'
      } as Keyword);
    });

    this.keywordListSubject.next(keywordObjs);

  }

  /**
   * redirect to next page
   * @param e event value
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
  public searchInputChanged(e: any) {
      console.log(e);
  }
}
