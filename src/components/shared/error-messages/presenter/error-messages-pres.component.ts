import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { IError } from 'src/models';

@Component({
  selector: 'app-error-messages-pres',
  templateUrl: './error-messages-pres.component.html',
  styleUrls: ['./error-messages-pres.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessagesPresComponent {
  /**
   * input value of errors
   */
  @Input()
  errors: IError[] | null;

  constructor() {}
}
