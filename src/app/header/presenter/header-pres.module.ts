import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/components/shared";
import { HeaderPresComponent } from "./header-pres.component";
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderPresComponent
  ],
  exports: [
    HeaderPresComponent
  ]
})
export class HeaderPresModule { }
