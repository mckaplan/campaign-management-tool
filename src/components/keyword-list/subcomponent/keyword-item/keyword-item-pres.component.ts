import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Keyword } from '../../model/keyword.model';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-keyword-item-pres',
  templateUrl: './keyword-item-pres.component.html',
  styleUrls: ['./keyword-item-pres.component.scss']
})
export class KeywordItemPresComponent implements OnInit {

  /**
   * Input of keyword list
   */
  @Input()
  keywordsList: Keyword[] | null = [];

  /**
   * form group of keyword list
  */
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      keywords: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.InitFormArray(this.keywordsList!);

    this.keywords.valueChanges.subscribe((result) => {
      console.log(result);
    });
  }

  /**
   * Set keyword form array
   * @param keywordsList
   */
  private async InitFormArray(keywordsList: Keyword[]) {
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
