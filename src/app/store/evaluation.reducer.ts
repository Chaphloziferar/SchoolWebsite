import { createReducer, on } from '@ngrx/store';
import * as fromEvaluation from '../action/evaluation.action';
import { initialState } from '../state/evaluation.state';

export const evaluationReducer = createReducer(
    initialState,

    on(fromEvaluation.loadEvaluationsAction, state => ({
        ...state,
        isLoading: true
    })),

    on(fromEvaluation.loadEvaluationsActionSuccess, (state, {evaluations}) => ({
        ...state,
        isLoading: false,
        evaluations: evaluations
    })),

    on(fromEvaluation.loadEvaluationsActionFailure, (state, {error}) => ({
        ...state,
        isLoading: false,
        error: error
    }))
)