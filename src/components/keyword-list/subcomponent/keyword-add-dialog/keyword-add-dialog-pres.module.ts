import { NgModule } from "@angular/core";
import { KeywordAddDialogPresComponent } from "./keyword-add-dialog-pres.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/components/shared";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    KeywordAddDialogPresComponent
  ],
  exports: [
    KeywordAddDialogPresComponent
  ]
})
export class KeywordAddDialogPresModule { }
