import { createAction, props } from "@ngrx/store";
import { Grade } from "../model/grade.model";

export enum ActionTypes {
    LOAD_GRADES = 'Load Grades',
    LOAD_GRADES_SUCCESS = 'Load Students Grades',
    LOAD_GRADES_FAILURE = 'Load Students Grades'
}

export const loadGradesAction = createAction(
    ActionTypes.LOAD_GRADES
);

export const loadGradesActionSuccess = createAction(
    ActionTypes.LOAD_GRADES_SUCCESS,
    props<{
        grades: Grade[]
    }>()
);

export const loadGradesActionFailure = createAction(
    ActionTypes.LOAD_GRADES_FAILURE,
    props<{
        error: String
    }>()
);

export const listUserActions = {
    loadGradesAction,
    loadGradesActionSuccess,
    loadGradesActionFailure
}