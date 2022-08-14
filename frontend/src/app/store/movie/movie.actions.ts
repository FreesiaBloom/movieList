import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/shared/interfaces/Movie.model';

export const loadMovies = createAction(
  '[Movies Component] Load Movies',
  props<{ searchTerm: string }>()
);

export const loadMoviesSuccess = createAction(
  '[Movies API] Movies Load Success',
  props<{ movies: Movie[] }>()
);

export const loadMoviesFailure = createAction(
  '[Movies API] Movies Load Failure',
  props<{ error: string }>()
);
