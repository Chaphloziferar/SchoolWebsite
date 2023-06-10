import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentState } from 'src/app/state/student.state';
import { AppState } from 'src/app/app.reducers';

export const selectStudent = createFeatureSelector<StudentState>('student');

const StudentFeature = (state: AppState) => {
    return state.studentStore
}

export const getStudents = createSelector(
    StudentFeature,
    (state: StudentState) => state.students
)

export const getSelectedStudent = createSelector(
    StudentFeature,
    (state: StudentState) => state.selectedStudent
)

export const getLoading = createSelector(
    StudentFeature,
    (state: StudentState) => state.isLoading
)

export const getError = createSelector(
    StudentFeature,
    (state: StudentState) => state.error
)

export const getModificationType = createSelector(
    StudentFeature,
    (state: StudentState) => state.modificationType
)

export const getShowModal = createSelector(
    StudentFeature,
    (state: StudentState) => state.showModal
);

export const studentSelectors = {
    getStudents,
    getSelectedStudent,
    getLoading,
    getError,
    getModificationType,
    getShowModal
}