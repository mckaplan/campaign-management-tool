import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-group-pres',
  templateUrl: './action-group-pres.component.html',
  styleUrls: ['./action-group-pres.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionGroupPresComponent {
  /**
   * button text
   */
  @Input()
  buttonText: string = '';

  /**
   * Output of add button click event
   */
  @Output()
  public addButton: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Output of search input value
   */
  @Output()
  public searchInput: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Get search input value
   * @param event search input value
   */
  public searchText(event: any) {
    this.searchInput.emit(event.target.value);
  }
}
