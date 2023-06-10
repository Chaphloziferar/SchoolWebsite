import { createReducer, on } from '@ngrx/store';
import * as fromEnrollment from '../action/enrollment.action';
import { initialState } from '../state/enrollment.state';

export const enrollmentReducer = createReducer(
    initialState,

    on(fromEnrollment.loadEnrollmentsAction, state => ({
        ...state,
        isLoading: true
    })),

    on(fromEnrollment.loadEnrollmentsActionSuccess, (state, {enrollments}) => ({
        ...state,
        isLoading: false,
        enrollments: enrollments
    })),

    on(fromEnrollment.loadEnrollmentsActionFailure, (state, {error}) => ({
        ...state,
        isLoading: false,
        error: error
    }))
)