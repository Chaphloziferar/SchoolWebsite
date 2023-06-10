import { Student } from '../model/student.model';

export interface StudentState {
    students: Student[],
    selectedStudent: Student | null,
    editStudent: Student | null,
    modificationType: "create" | "edit" | "delete" | null;
    isLoading: boolean,
    error: any,
    showModal: boolean
}

export const initialState: StudentState = {
    students: [],
    selectedStudent: null,
    editStudent: null,
    modificationType: null,
    isLoading: false,
    error: null,
    showModal: false
}