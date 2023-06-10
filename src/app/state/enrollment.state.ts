import { Enrollment } from '../model/enrollment.model';

export interface EnrollmentState {
    enrollments: Enrollment[],
    isLoading: boolean,
    error: any
}

export const initialState: EnrollmentState = {
    enrollments: [],
    isLoading: false,
    error: null
}