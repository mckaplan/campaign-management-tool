import { NgModule } from "@angular/core";
import { ActionGroupPresComponent } from "./action-group-pres.component";
import { CommonModule } from "@angular/common";
import { SharedMaterialModule } from "../sharedMaterial.module";



@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  declarations: [
    ActionGroupPresComponent
  ],
  exports: [
    ActionGroupPresComponent
  ]
})
export class ActionGroupPresModule { }
