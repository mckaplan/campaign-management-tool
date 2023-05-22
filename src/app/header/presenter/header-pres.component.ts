import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { UserModel } from 'src/models';

@Component({
  selector: 'app-header-pres',
  templateUrl: './header-pres.component.html',
  styleUrls: ['./header-pres.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPresComponent {

  /**
   * input value of user
   */
  @Input()
  user: UserModel | null;

  /**
   * input value to log in by user
   */
  @Input()
  isLoggedInUser: boolean | null;

  /**
   * Emit logout button click
   */
  @Output()
  public logOutBtnClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}
}
