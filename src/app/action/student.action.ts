import { createAction, props } from "@ngrx/store";
import { Student } from "../model/student.model";

export enum ActionTypes {
    LOAD_STUDENTS = 'Load Students',
    LOAD_STUDENTS_SUCCESS = 'Load Students Success',
    LOAD_STUDENTS_FAILURE = 'Load Students Failure'
}

export const loadStudentsAction = createAction(
    ActionTypes.LOAD_STUDENTS
);

export const loadStudentsActionSuccess = createAction(
    ActionTypes.LOAD_STUDENTS_SUCCESS,
    props<{
        students: Student[]
    }>()
);

export const loadStudentsActionFailure = createAction(
    ActionTypes.LOAD_STUDENTS_FAILURE,
    props<{
        error: String
    }>()
);

export const listUserActions = {
    loadStudentsAction,
    loadStudentsActionSuccess,
    loadStudentsActionFailure
}