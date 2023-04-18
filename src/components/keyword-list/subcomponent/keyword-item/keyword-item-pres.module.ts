import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KeywordItemPresComponent } from "./keyword-item-pres.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/components/shared";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    KeywordItemPresComponent
  ],
  exports: [
    KeywordItemPresComponent
  ]
})
export class KeywordItemPresModule { }
