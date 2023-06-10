import { Student } from '../model/student.model';

export interface StudentState {
    students: Student[],
    selectedStudent: Student | null,
    editStudent: Student | null,
    isLoading: boolean,
    error: any
}

export const initialState: StudentState = {
    students: [],
    selectedStudent: null,
    editStudent: null,
    isLoading: false,
    error: null
}