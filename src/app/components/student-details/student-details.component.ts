import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Student } from 'src/app/model/student.model';

import { studentSelectors } from 'src/app/root-store/student-store';
import { listStudentActions } from 'src/app/action/student.action';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  modificationType$: Observable<"create" | "edit" | "delete" | null>;
  selectedStudent$: Observable<Student | null>;

  modificationType: "Agregar" | "Editar" | null = null;
  selectedStudent: Student | null = null;
  newStudent: Student = {
    studentId: 0,
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    address: '',
    phoneNumber: '',
    email: '',
    deletedDate: null
  };

  firstName: string = '';
  lastName: string = '';
  dateOfBirth: string = '';
  address: string = '';
  phoneNumber: string = '';
  email: string = '';

  constructor(
    private store$: Store<AppState>,
    private router: Router
  ){
    this.modificationType$ = this.store$.select(studentSelectors.getModificationType);

    this.modificationType$.subscribe(modificationType => {
      switch(modificationType) {
        case 'create':
          this.modificationType = 'Agregar';
          break;
        case 'edit':
          this.modificationType = 'Editar';
          break;
      }
    });

      this.selectedStudent$ = this.store$.select(studentSelectors.getSelectedStudent);

      this.selectedStudent$.subscribe(selectedStudent => {
        this.selectedStudent = selectedStudent;
        if(this.modificationType === 'Editar' && selectedStudent) {
          this.firstName = selectedStudent.firstName;
          this.lastName = selectedStudent.lastName;
          this.dateOfBirth = selectedStudent.dateOfBirth.toString();
          this.address = selectedStudent.address;
          this.phoneNumber = selectedStudent.phoneNumber;
          this.email = selectedStudent.email;
        }
      });
   }

  guardarUsuario() {
    this.newStudent = {
      studentId: (this.modificationType === 'Editar' && this.selectedStudent) ? this.selectedStudent.studentId : 0,
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: new Date(this.dateOfBirth),
      address: this.address,
      phoneNumber: this.phoneNumber,
      email: this.email,
      deletedDate: null
    }

    if(this.validData(this.newStudent)) {
      switch(this.modificationType) {
        case 'Agregar':
          this.store$.dispatch(listStudentActions.addStudentAction({student: this.newStudent}));
          break;
        case 'Editar':
          this.store$.dispatch(listStudentActions.editStudentAction({student: this.newStudent}));
      }
      setTimeout(() => {
        this.store$.dispatch(listStudentActions.loadStudentsAction());
      }, 2000);
      this.router.navigate(['/students']);
    } else {
      alert('Debes llenar todos los campos');
    }
  }

  cancelar() {
    window.history.back()
  }

  validData(student: Student){
    if( student.firstName === '' || student.lastName === '' || student.dateOfBirth === null || student.address === '' || student.phoneNumber === '' || student.email === '') {
      return false
    }

    return true;
  }
}
