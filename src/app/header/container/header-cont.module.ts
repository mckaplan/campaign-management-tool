import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/components/shared";
import { HeaderContComponent } from "./header-cont.component";
import { HeaderPresModule } from "../presenter";

@NgModule({
  imports: [
    CommonModule,
    HeaderPresModule,
    SharedModule
  ],
  declarations: [
    HeaderContComponent
  ],
  exports: [
    HeaderContComponent,
  ]
})
export class HeaderContModule {

}
