import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { User } from 'src/app/model/user.model';

import { userSelectors } from 'src/app/root-store/user-store';
import { listUserActions } from 'src/app/action/user.action';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  users$: Observable<User[]>;

  users: User[] = [];

  constructor(
    private store$: Store<AppState>
  ){
    this.store$.dispatch(listUserActions.loadUsersAction());

    this.users$ = this.store$.select(userSelectors.getUsers);

    this.users$.subscribe(users => {
      this.users = users;
      console.log(users);
      
    })
  }
}
