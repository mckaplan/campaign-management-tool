import { Injectable } from "@angular/core";
import { IError} from "src/models";
import { BehaviorSubject } from "rxjs";
@Injectable()
export class ErrorService {
  /**
   * errors subject
   */
  private errorsSubject = new BehaviorSubject<IError[] | null>(null);

  /**
   * errors object to show error list
   */
  public errors = this.errorsSubject.asObservable();

  constructor() { }

  /**
   * show error
   * @param error message text
   */
  showErrorMessages(error: string) {
    this.errorsSubject.next([{ message: error }]);
  }

  /**
   * Clear error list
   */
  clearErrorMessages() {
    this.errorsSubject.next(null);
  }
}
