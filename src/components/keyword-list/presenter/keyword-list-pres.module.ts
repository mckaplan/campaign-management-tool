import { NgModule } from "@angular/core";
import { KeywordListPresComponent } from "./keyword-list-pres.component";
import { KeywordItemPresModule } from "../subcomponent";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/components/shared";

@NgModule({
  imports: [
    CommonModule,
    KeywordItemPresModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    KeywordListPresComponent
  ],
  exports: [
    KeywordListPresComponent
  ]
})
export class KeywordListPresModule { }
