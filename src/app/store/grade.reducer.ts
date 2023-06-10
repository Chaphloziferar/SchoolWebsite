import { createReducer, on } from '@ngrx/store';
import * as fromGrade from '../action/grade.action';
import { initialState } from '../state/grade.state';

export const gradeReducer = createReducer(
    initialState,

    on(fromGrade.loadGradesAction, state => ({
        ...state,
        isLoading: true
    })),

    on(fromGrade.loadGradesActionSuccess, (state, {grades}) => ({
        ...state,
        isLoading: false,
        grades: grades
    })),

    on(fromGrade.loadGradesActionFailure, (state, {error}) => ({
        ...state,
        isLoading: false,
        error: error
    }))
)