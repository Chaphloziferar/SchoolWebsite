import { Injectable } from '@angular/core';
import {  Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { EvaluationsService } from '../services/evaluations.services';
import * as evaluationActions from '../action/evaluation.action';
import { Evaluation } from '../model/evaluation.model';

@Injectable()
export class EvaluationEffect {
    constructor(
        private evaluationService: EvaluationsService,
        private action$: Actions
    ) {}

    evaluations: Evaluation[] = [];

    loadEvaluationsRequestEffect$ = createEffect<any, any, any, any>(
        () => this.action$.pipe(
            ofType(evaluationActions.loadEvaluationsAction),
            switchMap(action => {
                return this.evaluationService.getEvaluations().then(res => {
                    if(res) {
                        this.evaluations = res;
                        let data = evaluationActions.loadEvaluationsActionSuccess({evaluations: this.evaluations});
                        return data;
                    } else {
                        return evaluationActions.loadEvaluationsActionFailure({error: 'Internal Server Error'});
                    }
                }).catch(error => {
                    return evaluationActions.loadEvaluationsActionFailure(error);
                })
            })
        )
    )
}