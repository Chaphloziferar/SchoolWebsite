import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClassState } from 'src/app/state/class.state';
import { AppState } from 'src/app/app.reducers';

export const selectClass = createFeatureSelector<ClassState>('class');

const ClassFeature = (state: AppState) => {
    return state.classStore
}

export const getEvaluations = createSelector(
    ClassFeature,
    (state: ClassState) => state.classes
)

export const getLoading = createSelector(
    ClassFeature,
    (state: ClassState) => state.isLoading
)

export const getError = createSelector(
    ClassFeature,
    (state: ClassState) => state.error
)

export const classSelectors = {
    getEvaluations,
    getLoading,
    getError
}