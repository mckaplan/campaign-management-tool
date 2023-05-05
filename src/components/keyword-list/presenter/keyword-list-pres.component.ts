import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Keyword } from '../../../models/keyword.model';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-keyword-list-pres',
  templateUrl: './keyword-list-pres.component.html',
  styleUrls: ['./keyword-list-pres.component.scss']
})
export class KeywordListPresComponent implements OnInit, OnChanges {
  /**
   * Input keyword list
   */
  @Input()
  public keywordList: Keyword[] | null = [];

  @Output()
  public keywordListChanged: EventEmitter<Keyword[]> = new EventEmitter<Keyword[]>();

  /**
   * form group of keyword list
  */
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      keywords: this.fb.array([])
    });

    this.keywords.valueChanges.subscribe((result) => {
      console.log(result);
      this.keywordListChanged.emit(result);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes) {
      this.InitFormArray(this.keywordList!);
    }
  }

  ngOnInit(): void {
    this.InitFormArray(this.keywordList!);
  }

  /**
   * Set keyword form array
   * @param keywordsList
   */
  private async InitFormArray(keywordsList: Keyword[]) {
   this.keywords.clear();
    keywordsList.forEach((value) => {
      this.keywords.push(this.fb.group({
        name: this.fb.control(value.name),
        bid: this.fb.control(0),
        suggestedBid: this.fb.control(2),
        matchType: this.fb.control('Exact')
      }));
    });
  }

  /**
   * Get keywords form array
   */
  public get keywords() {
    return this.myForm.get('keywords') as FormArray;
  }

  /**
   * Remove one keyword
   * @param i index number of form array
   */
  public removeKeyword(i: number) {
    this.keywords.removeAt(i);
  }

  /**
   * Set suggested bid value to current one
   * @param index index number
   * @param suggestedBid suggested bid value
   */
  public setSuggestedBid(index: number, suggestedBid: number) {
    this.keywords.value[index].bid = suggestedBid;
    this.keywords.setValue(this.keywords.value);
  }
}
