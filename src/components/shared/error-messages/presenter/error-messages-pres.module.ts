import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedMaterialModule } from "../../sharedMaterial.module";
import { ErrorMessagesPresComponent } from "./error-messages-pres.component";

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  declarations: [
    ErrorMessagesPresComponent
  ],
  exports: [
    ErrorMessagesPresComponent
  ]
})
export class ErrorMessagesPresModule { }
