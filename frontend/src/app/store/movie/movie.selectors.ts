import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { MovieState } from './movie.reducers';

export const selectMovies = (state: AppState) => state.movies;
export const selectAllMovies = createSelector(
  selectMovies,
  (state: MovieState) => state.movies
);
