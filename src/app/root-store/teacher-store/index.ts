import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TeacherState } from 'src/app/state/teacher.state';
import { AppState } from 'src/app/app.reducers';

export const selectTeacher = createFeatureSelector<TeacherState>('teacher');

const TeacherFeature = (state: AppState) => {
    return state.teacherStore
}

export const getTeachers = createSelector(
    TeacherFeature,
    (state: TeacherState) => state.teachers
)

export const getLoading = createSelector(
    TeacherFeature,
    (state: TeacherState) => state.isLoading
)

export const getError = createSelector(
    TeacherFeature,
    (state: TeacherState) => state.error
)

export const teacherSelectors = {
    getTeachers,
    getLoading,
    getError
}