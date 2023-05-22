import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from 'src/models';

@Component({
  selector: 'app-header-cont',
  templateUrl: './header-cont.component.html',
  styleUrls: ['./header-cont.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderContComponent implements OnInit {
  /**
   * user subject
   */
  private userSubject = new BehaviorSubject<UserModel | null>(null);

  /**
   * user data to show
   */
  public user = this.userSubject.asObservable();

  /**
   * isLoggedInUser subject
   */
  private isLoggedInUserSubject = new BehaviorSubject<boolean>(false);

  /**
   * is user logged in
   */
  public isLoggedInUser = this.isLoggedInUserSubject.asObservable();

  constructor() {
  }

  ngOnInit(): void {
    this.userSubject.next({
      id:1,
      name: 'mckaplan',
      email: 'mck@amadeus.com'
    });

    this.isLoggedInUserSubject.next(true);
  }

  public logOut() {
    console.log('logout');
  }
}
