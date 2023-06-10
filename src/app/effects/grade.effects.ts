import { Injectable } from '@angular/core';
import {  Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { GradesService } from '../services/grades.services';
import * as gradeActions from '../action/grade.action';
import { Grade } from '../model/grade.model';

@Injectable()
export class GradeEffect {
    constructor(
        private gradeService: GradesService,
        private action$: Actions
    ) {}

    grades: Grade[] = [];

    loadGradesRequestEffect$ = createEffect<any, any, any, any>(
        () => this.action$.pipe(
            ofType(gradeActions.loadGradesAction),
            switchMap(action => {
                return this.gradeService.getGrades().then(res => {
                    if(res) {
                        this.grades = res;
                        let data = gradeActions.loadGradesActionSuccess({grades: this.grades});
                        return data;
                    } else {
                        return gradeActions.loadGradesActionFailure({error: 'Internal Server Error'});
                    }
                }).catch(error => {
                    return gradeActions.loadGradesActionFailure(error);
                })
            })
        )
    )
}