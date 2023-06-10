import { Student } from '../model/student.model';

export interface StudentState {
    students: Student[],
    isLoading: boolean,
    error: any
}

export const initialState: StudentState = {
    students: [],
    isLoading: false,
    error: null
}