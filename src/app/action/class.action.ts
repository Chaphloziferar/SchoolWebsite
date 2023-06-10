import { createAction, props } from "@ngrx/store";
import { Class } from "../model/class.model";

export enum ActionTypes {
    LOAD_CLASSES = 'Load Classes',
    LOAD_CLASSES_SUCCESS = 'Load Classes Success',
    LOAD_CLASSES_FAILURE = 'Load Classes Failure'
}

export const loadClassesAction = createAction(
    ActionTypes.LOAD_CLASSES
);

export const loadClassesActionSuccess = createAction(
    ActionTypes.LOAD_CLASSES_SUCCESS,
    props<{
        classes: Class[]
    }>()
);

export const loadClassesActionFailure = createAction(
    ActionTypes.LOAD_CLASSES_FAILURE,
    props<{
        error: String
    }>()
);

export const listClassActions = {
    loadClassesAction,
    loadClassesActionSuccess,
    loadClassesActionFailure
}