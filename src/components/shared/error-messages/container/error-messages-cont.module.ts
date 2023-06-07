import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ErrorMessagesPresModule } from "../presenter";
import { SharedMaterialModule } from "../../sharedMaterial.module";
import { ErrorMessagesContComponent } from "./error-messages-cont.component";

@NgModule({
  imports: [
    CommonModule,
    ErrorMessagesPresModule,
    SharedMaterialModule
  ],
  declarations: [
    ErrorMessagesContComponent
  ],
  exports: [
    ErrorMessagesContComponent,
  ]
})
export class ErrorMessagesContModule {

}
