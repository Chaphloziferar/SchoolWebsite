import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from 'src/app/state/user.state';
import { AppState } from 'src/app/app.reducers';

export const selectUser = createFeatureSelector<UserState>('user');

const UserFeature = (state: AppState) => {
    return state.userStore
}

export const getUsers = createSelector(
    UserFeature,
    (state: UserState) => state.users
)

export const getUser = createSelector(
    UserFeature,
    (state: UserState) => state.user
)

export const getLoading = createSelector(
    UserFeature,
    (state: UserState) => state.isLoading
)

export const getError = createSelector(
    UserFeature,
    (state: UserState) => state.error
)

export const userSelectors = {
    getUsers,
    getUser,
    getLoading,
    getError
}