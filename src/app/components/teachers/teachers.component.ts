import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Teacher } from 'src/app/model/teacher.model';

import { teacherSelectors } from 'src/app/root-store/teacher-store';
import { listTeacherActions } from 'src/app/action/teacher.action';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  teachers$: Observable<Teacher[]>;

  teachers: Teacher[] = [];

  constructor(
    private store$: Store<AppState>
  ){
    this.store$.dispatch(listTeacherActions.loadTeachersAction());

    this.teachers$ = this.store$.select(teacherSelectors.getTeachers);

    this.teachers$.subscribe(teachers => {
      this.teachers = teachers;
    })
  }
}
