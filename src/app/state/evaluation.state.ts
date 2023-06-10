import { Evaluation } from '../model/evaluation.model';

export interface EvaluationState {
    evaluations: Evaluation[],
    isLoading: boolean,
    error: any
}

export const initialState: EvaluationState = {
    evaluations: [],
    isLoading: false,
    error: null
}