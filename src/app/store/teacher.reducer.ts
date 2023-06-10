import { createReducer, on } from '@ngrx/store';
import * as fromTeacher from '../action/teacher.action';
import { initialState } from '../state/teacher.state';

export const teacherReducer = createReducer(
    initialState,

    on(fromTeacher.loadTeachersAction, state => ({
        ...state,
        isLoading: true
    })),

    on(fromTeacher.loadTeachersActionSuccess, (state, {teachers}) => ({
        ...state,
        isLoading: false,
        teachers: teachers
    })),

    on(fromTeacher.loadTeachersActionFailure, (state, {error}) => ({
        ...state,
        isLoading: false,
        error: error
    }))
)