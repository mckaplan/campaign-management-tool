import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import { ProductKeyword } from 'src/models';

@Component({
  selector: 'app-keyword-list-pres',
  templateUrl: './keyword-list-pres.component.html',
  styleUrls: ['./keyword-list-pres.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeywordListPresComponent implements OnInit, OnChanges {
  /**
   * Input keyword list
   */
  @Input()
  public productKeywords: ProductKeyword[] | null = [];

  /**
   * Emit value of productKeywords if obj is changed
   */
  @Output()
  public productKeywordsChanged: EventEmitter<ProductKeyword[]> = new EventEmitter<ProductKeyword[]>();

  /**
   * form group of keyword list
  */
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      keywords: this.fb.array([])
    });


  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && !changes['productKeywords'].firstChange) {
      this.InitFormArray(this.productKeywords!);
    }
  }

  ngOnInit(): void {
    this.InitFormArray(this.productKeywords!);

    this.keywords.valueChanges
      .pipe(
        filter((result) => !!result)
      )
      .subscribe((result) => {
        console.log(result);
        this.productKeywordsChanged.emit(result);
      });
  }

  /**
   * Set keyword form array
   * @param keywordsList
   */
  private async InitFormArray(productKeywords: ProductKeyword[]) {
    this.keywords.clear();
    productKeywords.forEach((value) => {
      this.keywords.push(this.fb.group({
        name: this.fb.control(value.name, Validators.required),
        bid: this.fb.control(value.bid, Validators.required),
        suggestedBid: this.fb.control(value.suggestedBid),
        matchType: this.fb.control(value.matchType),
        isActive: this.fb.control(value.isActive)
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
    let rawValue = [...this.keywords.getRawValue()];
    rawValue[index].bid = suggestedBid;
    this.keywords.setValue(rawValue);
  }
}
