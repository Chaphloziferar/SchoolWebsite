import { Injectable } from '@angular/core';
import {  Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { TeachersService } from '../services/teachers.services';
import * as teacherActions from '../action/teacher.action';
import { Teacher } from '../model/teacher.model';

@Injectable()
export class TeacherEffect {
    constructor(
        private teacherService: TeachersService,
        private action$: Actions
    ) {}

    teachers: Teacher[] = [];

    loadTeachersRequestEffect$ = createEffect<any, any, any, any>(
        () => this.action$.pipe(
            ofType(teacherActions.loadTeachersAction),
            switchMap(action => {
                return this.teacherService.getTeachers().then(res => {
                    if(res) {
                        this.teachers = res;
                        let data = teacherActions.loadTeachersActionSuccess({teachers: this.teachers});
                        return data;
                    } else {
                        return teacherActions.loadTeachersActionFailure({error: 'Internal Server Error'});
                    }
                }).catch(error => {
                    return teacherActions.loadTeachersActionFailure(error);
                })
            })
        )
    )
}