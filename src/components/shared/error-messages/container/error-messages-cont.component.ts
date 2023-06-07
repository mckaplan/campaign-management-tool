import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IError } from 'src/models';
import { ErrorService } from 'src/services';

@Component({
  selector: 'app-error-messages-cont',
  templateUrl: './error-messages-cont.component.html',
  styleUrls: ['./error-messages-cont.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessagesContComponent implements OnInit {

  /**
   * Keep errors in observable
   */
  errors: Observable<IError[] | null>;

  constructor(private errorService: ErrorService) {
  }

  ngOnInit(): void {
    this.errors = this.errorService.errors;
  }
}
