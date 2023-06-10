import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GradeState } from 'src/app/state/grade.state';
import { AppState } from 'src/app/app.reducers';

export const selectGrade = createFeatureSelector<GradeState>('grade');

const GradeFeature = (state: AppState) => {
    return state.gradeStore
}

export const getGrades = createSelector(
    GradeFeature,
    (state: GradeState) => state.grades
)

export const getLoading = createSelector(
    GradeFeature,
    (state: GradeState) => state.isLoading
)

export const getError = createSelector(
    GradeFeature,
    (state: GradeState) => state.error
)

export const userSelectors = {
    getGrades,
    getLoading,
    getError
}