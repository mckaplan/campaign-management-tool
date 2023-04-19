import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { KeywordListPresModule } from "../presenter";
import { KeywordListContComponent } from "./keyword-list-cont.component";
import { SharedModule } from "src/components/shared";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    KeywordListPresModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [
    KeywordListContComponent
  ],
  exports: [
    KeywordListContComponent,
  ]
})
export class KeywordListContModule { }
