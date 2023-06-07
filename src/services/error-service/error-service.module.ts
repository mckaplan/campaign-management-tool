
import { NgModule } from "@angular/core";
import { ErrorService } from "./error.service";

@NgModule({
  providers:[
    ErrorService
  ],
  exports: []
})
export class ErrorServiceModule {}
