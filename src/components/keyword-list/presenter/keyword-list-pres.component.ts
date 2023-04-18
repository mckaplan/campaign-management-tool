import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Keyword } from '../model/keyword.model';

@Component({
  selector: 'app-keyword-list-pres',
  templateUrl: './keyword-list-pres.component.html',
  styleUrls: ['./keyword-list-pres.component.scss']
})
export class KeywordListPresComponent {
  /**
   * Input keyword list
   */
  @Input()
  public keywordList: Keyword[] | null = [];

  /**
   * Output of add keyword button clicked
   */
  @Output()
  public addKeywordButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Output of continue button click to redirect next page
   */
  @Output()
  public continueButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Output of cancel button click to redirect previous page
   */
  @Output()
  public cancelButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Output of search input value
   */
  @Output()
  public searchInputChanged: EventEmitter<string> = new EventEmitter<string>();
}
