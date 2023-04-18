import { NgModule } from "@angular/core";
import { ActionGroupPresModule } from "./action-group";
import { ButtonsGroupPresModule } from "./buttons-group";
import { SharedMaterialModule } from "./sharedMaterial.module";

@NgModule({
  imports: [
    SharedMaterialModule,
    ActionGroupPresModule,
    ButtonsGroupPresModule
  ],
  exports: [
    SharedMaterialModule,
    ActionGroupPresModule,
    ButtonsGroupPresModule
  ]
})
export class SharedModule { }
