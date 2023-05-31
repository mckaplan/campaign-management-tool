import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { KeywordListPresModule } from "../presenter";
import { KeywordListContComponent } from "./keyword-list-cont.component";
import { SharedModule } from "src/components/shared";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: KeywordListContComponent
      }
    ]),
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
    RouterModule,
  ]
})
export class KeywordListContModule { }
