import { createReducer, on } from '@ngrx/store';
import * as fromClass from '../action/class.action';
import { initialState } from '../state/class.state';

export const classReducer = createReducer(
    initialState,

    on(fromClass.loadClassesAction, state => ({
        ...state,
        isLoading: true
    })),

    on(fromClass.loadClassesActionSuccess, (state, {classes}) => ({
        ...state,
        isLoading: false,
        classes: classes
    })),

    on(fromClass.loadClassesActionFailure, (state, {error}) => ({
        ...state,
        isLoading: false,
        error: error
    }))
)