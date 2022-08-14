import { createSelector } from '@ngrx/store';

export interface FeatureState {
  searchTherm: string;
}

export interface AppState {
  feature: FeatureState;
}

export const selectSearchTerm = (state: AppState) => state.feature;

export const selectFeatureCount = createSelector(
  selectSearchTerm,
  (state: FeatureState) => state.searchTherm
);
