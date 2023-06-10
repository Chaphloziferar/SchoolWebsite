import { createAction, props } from "@ngrx/store";
import { Teacher } from "../model/teacher.model";

export enum ActionTypes {
    LOAD_TEACHERS = 'Load Teachers',
    LOAD_TEACHERS_SUCCESS = 'Load Teachers Success',
    LOAD_TEACHERS_FAILURE = 'Load Teachers Failure'
}

export const loadTeachersAction = createAction(
    ActionTypes.LOAD_TEACHERS
);

export const loadTeachersActionSuccess = createAction(
    ActionTypes.LOAD_TEACHERS_SUCCESS,
    props<{
        teachers: Teacher[]
    }>()
);

export const loadTeachersActionFailure = createAction(
    ActionTypes.LOAD_TEACHERS_FAILURE,
    props<{
        error: String
    }>()
);

export const listUserActions = {
    loadTeachersAction,
    loadTeachersActionSuccess,
    loadTeachersActionFailure
}