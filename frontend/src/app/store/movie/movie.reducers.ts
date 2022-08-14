import { createReducer, on } from '@ngrx/store';
import { StateStatus } from 'src/app/shared/enums/StateStatus';
import { IMovie } from 'src/app/shared/interfaces/IMovie';
import {
  loadMovies,
  loadMoviesSuccess,
  loadMoviesFailure
} from './movie.actions';

export interface MovieState {
  movies: IMovie[];
  error: string | null;
  status: StateStatus.pending | StateStatus.loading | StateStatus.error | StateStatus.success;
}

export const initialState: MovieState = {
  movies: [],
  error: null,
  status: StateStatus.pending,
};

export const moviesReducer = createReducer(
  // Supply the initial state
  initialState,
  // Trigger loading the movies
  on(loadMovies, (state) => ({ ...state, status: StateStatus.loading })),
  // Handle successfully loaded movies
  on(loadMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies: movies,
    error: null,
    status: StateStatus.success,
  })),
  // Handle movies load failure
  on(loadMoviesFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: StateStatus.error,
  }))
);
