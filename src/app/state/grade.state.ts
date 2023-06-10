import { Grade } from '../model/grade.model';

export interface GradeState {
    grades: Grade[],
    isLoading: boolean,
    error: any
}

export const initialState: GradeState = {
    grades: [],
    isLoading: false,
    error: null
}