import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Student } from 'src/app/model/student.model';

import { studentSelectors } from 'src/app/root-store/student-store';
import { listStudentActions } from 'src/app/action/student.action';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent {
  modificationType$: Observable<"create" | "edit" | "delete" | null>;
  showModal$: Observable<boolean>;
  selectedStudent$: Observable<Student | null>;

  showModal: boolean = false
  modificationType: "crear" | "editar" | "eliminar" | null = null;
  selectedStudent: Student | null = null;

  constructor(
    private store$: Store<AppState>
  ){
    this.store$.dispatch(listStudentActions.loadStudentsAction());

    this.showModal$ = this.store$.select(studentSelectors.getShowModal);

    this.showModal$.subscribe(showModal => {
      this.showModal = showModal;
    });

    this.modificationType$ = this.store$.select(studentSelectors.getModificationType);

    this.modificationType$.subscribe(modificationType => {
      switch(modificationType) {
        case 'create':
          this.modificationType = 'crear';
          break;
        case 'edit':
          this.modificationType = 'editar';
          break;
        case 'delete':
          this.modificationType = 'eliminar';
          break;
      }
    });

    this.selectedStudent$ = this.store$.select(studentSelectors.getSelectedStudent);

    this.selectedStudent$.subscribe(selectedStudent => {
      this.selectedStudent = selectedStudent;
    });
  }

  closeConfirmationModal() {
    this.store$.dispatch(listStudentActions.showModalAction({showModal: false}));
  }

  confirm(): void {
    if(this.modificationType && this.selectedStudent) {
      switch(this.modificationType) {
        case 'crear':
          this.store$.dispatch(listStudentActions.addStudentAction({student: this.selectedStudent}));
          break;
        case 'editar':
          this.store$.dispatch(listStudentActions.editStudentAction({student: this.selectedStudent}));
          break;
        case 'eliminar':
          this.store$.dispatch(listStudentActions.deleteStudentAction({studentId: this.selectedStudent.studentId}));
          setTimeout(() => {
            this.store$.dispatch(listStudentActions.loadStudentsAction());
          }, 2000);
          break;
      }
    }
    this.closeConfirmationModal();
  }

  decline(): void {
    this.closeConfirmationModal();
  }
}
