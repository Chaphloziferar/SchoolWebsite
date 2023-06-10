import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EvaluationState } from 'src/app/state/evaluation.state';
import { AppState } from 'src/app/app.reducers';

export const selectEvaluation = createFeatureSelector<EvaluationState>('evaluation');

const EvaluationFeature = (state: AppState) => {
    return state.evaluationStore
}

export const getEvaluations = createSelector(
    EvaluationFeature,
    (state: EvaluationState) => state.evaluations
)

export const getLoading = createSelector(
    EvaluationFeature,
    (state: EvaluationState) => state.isLoading
)

export const getError = createSelector(
    EvaluationFeature,
    (state: EvaluationState) => state.error
)

export const evaluationSelectors = {
    getEvaluations,
    getLoading,
    getError
}