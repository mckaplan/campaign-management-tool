import { ChangeDetectionStrategy, Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-buttons-group-pres',
  templateUrl: './buttons-group-pres.component.html',
  styleUrls: ['./buttons-group-pres.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsGroupPresComponent {
  /**
   * Output of continue button clicked event
   */
  @Output()
  public continueButton: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Output of cancel button clicked event
   */
  @Output()
  public cancelButton: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Output of continue button disabled
   */
  @Input() disabled: boolean;
}
