import { createSelector } from '@ngrx/store';
import { Movie } from 'src/app/shared/interfaces/Movie.model';
import { AppState } from '../app.state';
import { MoviesState } from './movie.reducers';

export const selectMovies = (state: AppState) => state.movies;
export const selectAllMovies = createSelector(
  selectMovies,
  (state: MoviesState) => state.movies
);
