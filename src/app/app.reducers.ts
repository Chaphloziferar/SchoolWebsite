import { ActionReducerMap } from '@ngrx/store';

// States
import * as fromUserState from './state/user.state';
import * as fromTeacherState from './state/teacher.state';
import * as fromStudentState from './state/student.state';
import * as fromClassState from './state/class.state';
import * as fromEnrollmentState from './state/enrollment.state';
import * as fromGradeState from './state/grade.state';
import * as fromEvaluationState from './state/evaluation.state';

// Reducers
import * as fromUserReducer from './store/user.reducer';
import * as fromTeacherReducer from './store/teacher.reducer';
import * as fromStudentReducer from './store/student.reducer';
import * as fromClassReducer from './store/class.reducer';
import * as fromEnrollmentReducer from './store/enrollment.reducer';
import * as fromGradeReducer from './store/grade.reducer';
import * as fromEvaluationReducer from './store/evaluation.reducer';

export interface AppState {
    userStore: fromUserState.UserState
    teacherStore: fromTeacherState.TeacherState
    studentStore: fromStudentState.StudentState
    classStore: fromClassState.ClassState
    enrollmentStore: fromEnrollmentState.EnrollmentState
    gradeStore: fromGradeState.GradeState
    evaluationStore: fromEvaluationState.EvaluationState
}

export const appReducers : ActionReducerMap<AppState> = {
    userStore: fromUserReducer.userReducer,
    teacherStore: fromTeacherReducer.teacherReducer,
    studentStore: fromStudentReducer.studentReducer,
    classStore: fromClassReducer.classReducer,
    enrollmentStore: fromEnrollmentReducer.enrollmentReducer,
    gradeStore: fromGradeReducer.gradeReducer,
    evaluationStore: fromEvaluationReducer.evaluationReducer
}