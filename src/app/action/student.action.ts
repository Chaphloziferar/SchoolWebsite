import { createAction, props } from "@ngrx/store";
import { Student } from "../model/student.model";

export enum ActionTypes {
    LOAD_STUDENTS = 'Load Students',
    LOAD_STUDENTS_SUCCESS = 'Load Students Success',
    LOAD_STUDENTS_FAILURE = 'Load Students Failure',

    SELECT_STUDENT = 'Select Student',
    SELECT_STUDENT_FAILURE = 'Select Student Failure',

    ADD_STUDENT = 'Add Students',
    ADD_STUDENT_SUCCESS = 'Add Students Success',
    ADD_STUDENT_FAILURE = 'Add Students Failure',

    EDIT_STUDENT = 'Edit Students',
    EDIT_STUDENT_SUCCESS = 'Edit Students Success',
    EDIT_STUDENT_FAILURE = 'Edit Students Failure',

    DELETE_STUDENT = 'Delete Students',
    DELETE_STUDENT_SUCCESS = 'Delete Students Success',
    DELETE_STUDENT_FAILURE = 'Delete Students Failure',

    SET_MODIFICATION_TYPE = 'Set Modification Type',
    SET_MODIFICATION_TYPE_FAILURE = 'Set Modification Type Failure',

    SHOW_MODAL = "Show Modal",
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

export const selectStudentAction = createAction(
    ActionTypes.SELECT_STUDENT,
    props<{
        student: Student
    }>()
);

export const selectStudentActionFailure = createAction(
    ActionTypes.SELECT_STUDENT_FAILURE,
    props<{
        error: String
    }>()
);

export const addStudentAction = createAction(
    ActionTypes.ADD_STUDENT,
    props<{
        student: Student
    }>()
);

export const addStudentActionSuccess = createAction(
    ActionTypes.ADD_STUDENT_SUCCESS,
    props<{
        student: Student
    }>()
);

export const addStudentActionFailure = createAction(
    ActionTypes.ADD_STUDENT_FAILURE,
    props<{
        error: String
    }>()
);

export const editStudentAction = createAction(
    ActionTypes.EDIT_STUDENT,
    props<{
        student: Student
    }>()
);

export const editStudentActionSuccess = createAction(
    ActionTypes.EDIT_STUDENT_SUCCESS,
    props<{
        student: Student
    }>()
);

export const editStudentActionFailure = createAction(
    ActionTypes.EDIT_STUDENT_FAILURE,
    props<{
        error: String
    }>()
);

export const deleteStudentAction = createAction(
    ActionTypes.DELETE_STUDENT,
    props<{
        studentId: number
    }>()
);

export const deleteStudentActionSuccess = createAction(
    ActionTypes.DELETE_STUDENT_SUCCESS,
    props<{
        student: Student
    }>()
);

export const deleteStudentActionFailure = createAction(
    ActionTypes.DELETE_STUDENT_FAILURE,
    props<{
        error: String
    }>()
);

export const setModificationTypeAction = createAction(
    ActionTypes.SET_MODIFICATION_TYPE,
    props<{
        modificationType: "create" | "edit" | "delete";
    }>()
);

export const setModificationTypeActionFailure = createAction(
    ActionTypes.SET_MODIFICATION_TYPE_FAILURE,
    props<{
        error: String
    }>()
);

export const showModalAction = createAction(
    ActionTypes.SHOW_MODAL,
    props<{
        showModal: boolean
    }>()
);

export const listStudentActions = {
    loadStudentsAction,
    loadStudentsActionSuccess,
    loadStudentsActionFailure,
    selectStudentAction,
    selectStudentActionFailure,
    addStudentAction,
    addStudentActionSuccess,
    addStudentActionFailure,
    editStudentAction,
    editStudentActionSuccess,
    editStudentActionFailure,
    deleteStudentAction,
    deleteStudentActionSuccess,
    deleteStudentActionFailure,
    setModificationTypeAction,
    setModificationTypeActionFailure,
    showModalAction
}