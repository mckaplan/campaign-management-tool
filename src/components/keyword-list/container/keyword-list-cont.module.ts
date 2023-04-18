import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { KeywordListPresModule } from "../presenter";
import { KeywordListContComponent } from "./keyword-list-cont.component";
import { KeywordAddDialogPresModule } from "../subcomponent";

@NgModule({
  imports: [
    CommonModule,
    KeywordListPresModule,
  ],
  declarations: [
    KeywordListContComponent
  ],
  exports: [
    KeywordListContComponent,
  ]
})
export class KeywordListContModule { }
