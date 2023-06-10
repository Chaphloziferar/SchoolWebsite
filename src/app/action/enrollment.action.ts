import { createAction, props } from "@ngrx/store";
import { Enrollment } from "../model/enrollment.model";

export enum ActionTypes {
    LOAD_ENROLLMENTS = 'Load Enrollments',
    LOAD_ENROLLMENTS_SUCCESS = 'Load Enrollments Success',
    LOAD_ENROLLMENTS_FAILURE = 'Load Enrollments Failure'
}

export const loadEnrollmentsAction = createAction(
    ActionTypes.LOAD_ENROLLMENTS
);

export const loadEnrollmentsActionSuccess = createAction(
    ActionTypes.LOAD_ENROLLMENTS_SUCCESS,
    props<{
        enrollments: Enrollment[]
    }>()
);

export const loadEnrollmentsActionFailure = createAction(
    ActionTypes.LOAD_ENROLLMENTS_FAILURE,
    props<{
        error: String
    }>()
);

export const listUserActions = {
    loadEnrollmentsAction,
    loadEnrollmentsActionSuccess,
    loadEnrollmentsActionFailure
}