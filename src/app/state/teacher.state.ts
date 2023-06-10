import { Teacher } from '../model/teacher.model';

export interface TeacherState {
    teachers: Teacher[],
    isLoading: boolean,
    error: any
}

export const initialState: TeacherState = {
    teachers: [],
    isLoading: false,
    error: null
}