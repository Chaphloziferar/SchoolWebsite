import { createReducer, on } from '@ngrx/store';
import * as fromUser from '../action/user.action';
import { initialState } from '../state/user.state';

export const userReducer = createReducer(
    initialState,

    on(fromUser.loadUsersAction, state => ({
        ...state,
        isLoading: true
    })),

    on(fromUser.loadUsersActionSuccess, (state, {users}) => ({
        ...state,
        isLoading: false,
        users: users
    })),

    on(fromUser.loadUsersActionFailure, (state, {error}) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(fromUser.loadUserAction, state => ({
        ...state,
        isLoading: true
    })),

    on(fromUser.loadUserActionSuccess, (state, {user}) => ({
        ...state,
        isLoading: false,
        user: user
    })),

    on(fromUser.loadUserActionFailure, (state, {error}) => ({
        ...state,
        isLoading: false,
        error: error
    }))
)