import { createReducer, on } from '@ngrx/store';
import * as fromStudent from '../action/student.action';
import { initialState } from '../state/student.state';

export const studentReducer = createReducer(
    initialState,

    on(fromStudent.loadStudentsAction, state => ({
        ...state,
        isLoading: true
    })),

    on(fromStudent.loadStudentsActionSuccess, (state, {students}) => ({
        ...state,
        isLoading: false,
        students: students
    })),

    on(fromStudent.loadStudentsActionFailure, (state, {error}) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(fromStudent.selectStudentAction, (state, {student}) => ({
        ...state,
        isLoading: false,
        selectedStudent: student
    })),

    on(fromStudent.selectStudentActionFailure, (state, {error}) => ({
        ...state,
        isLoading: false,
        error: error
    }))
)