import { NgModule } from "@angular/core";
import { SharedMaterialModule } from "./sharedMaterial.module";
import { ActionGroupPresModule } from "./action-group";
import { ButtonsGroupPresModule } from "./buttons-group";
import { ErrorMessagesContModule } from "./error-messages";

@NgModule({
  imports: [
    SharedMaterialModule,
    ActionGroupPresModule,
    ButtonsGroupPresModule,
    ErrorMessagesContModule
  ],
  exports: [
    SharedMaterialModule,
    ActionGroupPresModule,
    ButtonsGroupPresModule,
    ErrorMessagesContModule
  ]
})
export class SharedModule { }
