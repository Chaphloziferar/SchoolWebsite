import { User } from '../model/user.model';

export interface UserState {
    users: User[],
    user: User | null,
    isLoading: boolean,
    error: any
}

export const initialState: UserState = {
    users: [],
    user: null,
    isLoading: false,
    error: null
}