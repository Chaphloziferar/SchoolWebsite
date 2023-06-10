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

    addStudentRequestEffect$ = createEffect<any, any, any, any>(
        () => this.action$.pipe(
            ofType(studentActions.addStudentAction),
            switchMap(action => {
                return this.studentService.addStudent(action.student).then(res => {
                    if(res) {
                        let student = res;
                        let data = studentActions.addStudentActionSuccess({student});
                        return data;
                    } else {
                        return studentActions.addStudentActionFailure({error: 'Internal Server Error'});
                    }
                }).catch(error => {
                    return studentActions.addStudentActionFailure(error);
                })
            })
        )
    )

    editStudentRequestEffect$ = createEffect<any, any, any, any>(
        () => this.action$.pipe(
            ofType(studentActions.editStudentAction),
            switchMap(action => {
                return this.studentService.editStudent(action.student).then(res => {
                    if(res) {
                        let student = res;
                        let data = studentActions.editStudentActionSuccess({student});
                        return data;
                    } else {
                        return studentActions.editStudentActionFailure({error: 'Internal Server Error'});
                    }
                }).catch(error => {
                    return studentActions.editStudentActionFailure(error);
                })
            })
        )
    )

    deleteStudentRequestEffect$ = createEffect<any, any, any, any>(
        () => this.action$.pipe(
            ofType(studentActions.deleteStudentAction),
            switchMap(action => {
                return this.studentService.deleteStudent(action.studentId).then(res => {
                    if(res) {
                        let student = res;
                        let data = studentActions.deleteStudentActionSuccess({student});
                        return data;
                    } else {
                        return studentActions.deleteStudentActionFailure({error: 'Internal Server Error'});
                    }
                }).catch(error => {
                    return studentActions.deleteStudentActionFailure(error);
                })
            })
        )
    )
}