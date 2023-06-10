import { Class } from '../model/class.model';

export interface ClassState {
    classes: Class[],
    isLoading: boolean,
    error: any
}

export const initialState: ClassState = {
    classes: [],
    isLoading: false,
    error: null
}