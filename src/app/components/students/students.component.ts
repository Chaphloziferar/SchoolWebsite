import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Student } from 'src/app/model/student.model';

import { studentSelectors } from 'src/app/root-store/student-store';
import { listStudentActions } from 'src/app/action/student.action';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students$: Observable<Student[]>;
  selectedStudent$: Observable<Student | null>;

  highlightedRow: HTMLElement | null = null;
  students: Student[] = [];
  selectedStudent: Student | null = null;
  isSelectedStudent: boolean = false;

  constructor(
    private store$: Store<AppState>
  ){
    this.store$.dispatch(listStudentActions.loadStudentsAction());

    this.students$ = this.store$.select(studentSelectors.getStudents);

    this.students$.subscribe(students => {
      this.students = students;
    });

    this.selectedStudent$ = this.store$.select(studentSelectors.getSelectedStudent);

    this.selectedStudent$.subscribe(student => {
      this.isSelectedStudent = (student) ? true : false;
      this.selectedStudent = student;
    })
  }

  highlightRow(target: EventTarget | null, student: Student) {
    if (this.highlightedRow) {
      this.highlightedRow.classList.remove('highlighted');
    }
    if (target instanceof HTMLElement) {
      this.highlightedRow = target.parentElement;
      this.highlightedRow?.classList.add('highlighted');
    }

    this.store$.dispatch(listStudentActions.selectStudentAction({student}))
  }

  deleteStudent() {
    this.store$.dispatch(listStudentActions.setModificationTypeAction({modificationType: 'delete'}));
    this.store$.dispatch(listStudentActions.showModalAction({showModal: true}));
  }

  editStudent() {
    this.store$.dispatch(listStudentActions.setModificationTypeAction({modificationType: 'edit'}));
    this.store$.dispatch(listStudentActions.showModalAction({showModal: true}));
  }

  addStudent() {
    this.store$.dispatch(listStudentActions.setModificationTypeAction({modificationType: 'create'}));
    this.store$.dispatch(listStudentActions.showModalAction({showModal: true}));
  }

  viewNotes() {
    console.log('enable')
  }
}
