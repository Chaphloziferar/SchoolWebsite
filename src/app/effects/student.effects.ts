import { Injectable } from '@angular/core';
import {  Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { StudentsService } from '../services/students.services';
import * as studentActions from '../action/student.action';
import { Student } from '../model/student.model';

@Injectable()
export class StudentEffect {
    constructor(
        private studentService: StudentsService,
        private action$: Actions
    ) {}

    students: Student[] = [];

    loadStudentsRequestEffect$ = createEffect<any, any, any, any>(
        () => this.action$.pipe(
            ofType(studentActions.loadStudentsAction),
            switchMap(action => {
                return this.studentService.getStudents().then(res => {
                    if(res) {
                        this.students = res;
                        let data = studentActions.loadStudentsActionSuccess({students: this.students});
                        return data;
                    } else {
                        return studentActions.loadStudentsActionFailure({error: 'Internal Server Error'});
                    }
                }).catch(error => {
                    return studentActions.loadStudentsActionFailure(error);
                })
            })
        )
    )
}