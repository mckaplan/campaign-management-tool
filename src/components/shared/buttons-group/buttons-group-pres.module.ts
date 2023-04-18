import { NgModule } from "@angular/core";
import { ButtonsGroupPresComponent } from "./buttons-group-pres.component";
import { CommonModule } from "@angular/common";
import { SharedMaterialModule } from "../sharedMaterial.module";



@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  declarations: [
    ButtonsGroupPresComponent
  ],
  exports: [
    ButtonsGroupPresComponent
  ]
})
export class ButtonsGroupPresModule { }
