import { Injectable } from '@angular/core';
import {  Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { EnrollmentsService } from '../services/enrollments.services';
import * as enrollmentActions from '../action/enrollment.action';
import { Enrollment } from '../model/enrollment.model';

@Injectable()
export class EnrollmentEffect {
    constructor(
        private enrollmentService: EnrollmentsService,
        private action$: Actions
    ) {}

    enrollments: Enrollment[] = [];

    loadEnrollmentsRequestEffect$ = createEffect<any, any, any, any>(
        () => this.action$.pipe(
            ofType(enrollmentActions.loadEnrollmentsAction),
            switchMap(action => {
                return this.enrollmentService.getEnrollments().then(res => {
                    if(res) {
                        this.enrollments = res;
                        let data = enrollmentActions.loadEnrollmentsActionSuccess({enrollments: this.enrollments});
                        return data;
                    } else {
                        return enrollmentActions.loadEnrollmentsActionFailure({error: 'Internal Server Error'});
                    }
                }).catch(error => {
                    return enrollmentActions.loadEnrollmentsActionFailure(error);
                })
            })
        )
    )
}