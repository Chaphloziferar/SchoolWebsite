import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnrollmentState } from 'src/app/state/enrollment.state';
import { AppState } from 'src/app/app.reducers';

export const selectEnrollment = createFeatureSelector<EnrollmentState>('enrollment');

const EnrollmentFeature = (state: AppState) => {
    return state.enrollmentStore
}

export const getEvaluations = createSelector(
    EnrollmentFeature,
    (state: EnrollmentState) => state.enrollments
)

export const getLoading = createSelector(
    EnrollmentFeature,
    (state: EnrollmentState) => state.isLoading
)

export const getError = createSelector(
    EnrollmentFeature,
    (state: EnrollmentState) => state.error
)

export const enrollmentSelectors = {
    getEvaluations,
    getLoading,
    getError
}