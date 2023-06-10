import { createAction, props } from "@ngrx/store";
import { Evaluation } from "../model/evaluation.model";

export enum ActionTypes {
    LOAD_EVALUATIONS = 'Load Evaluations',
    LOAD_EVALUATIONS_SUCCESS = 'Load Evaluations Success',
    LOAD_EVALUATIONS_FAILURE = 'Load Evaluations Failure'
}

export const loadEvaluationsAction = createAction(
    ActionTypes.LOAD_EVALUATIONS
);

export const loadEvaluationsActionSuccess = createAction(
    ActionTypes.LOAD_EVALUATIONS_SUCCESS,
    props<{
        evaluations: Evaluation[]
    }>()
);

export const loadEvaluationsActionFailure = createAction(
    ActionTypes.LOAD_EVALUATIONS_FAILURE,
    props<{
        error: String
    }>()
);

export const listUserActions = {
    loadEvaluationsAction,
    loadEvaluationsActionSuccess,
    loadEvaluationsActionFailure
}