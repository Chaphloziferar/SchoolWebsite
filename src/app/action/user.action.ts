import { createAction, props } from "@ngrx/store";
import { User } from "../model/user.model";

export enum ActionTypes {
    LOAD_USERS = 'Load Users',
    LOAD_USERS_SUCCESS = 'Load Users Success',
    LOAD_USERS_FAILURE = 'Load Users Failure',

    LOAD_USER = 'Load User',
    LOAD_USER_SUCCESS = 'Load User Success',
    LOAD_USER_FAILURE = 'Load User Failure'
}

export const loadUsersAction = createAction(
    ActionTypes.LOAD_USERS
);

export const loadUsersActionSuccess = createAction(
    ActionTypes.LOAD_USERS_SUCCESS,
    props<{
        users: User[]
    }>()
);

export const loadUsersActionFailure = createAction(
    ActionTypes.LOAD_USERS_SUCCESS,
    props<{
        error: String
    }>()
);

export const loadUserAction = createAction(
    ActionTypes.LOAD_USER
);

export const loadUserActionSuccess = createAction(
    ActionTypes.LOAD_USER_SUCCESS,
    props<{
        user: User
    }>()
);

export const loadUserActionFailure = createAction(
    ActionTypes.LOAD_USER_SUCCESS,
    props<{
        error: String
    }>()
);

export const listUserActions = {
    loadUsersAction,
    loadUsersActionSuccess,
    loadUsersActionFailure,
    loadUserAction,
    loadUserActionSuccess,
    loadUserActionFailure
}