import { createAction, props } from '@ngrx/store';
import { IMovie } from 'src/app/shared/interfaces/IMovie';

export const loadMovies = createAction('[Movies Component] Load Movies');

export const loadMoviesSuccess = createAction(
  '[Movies API] Movies Load Success',
  props<{ movies: IMovie[] }>()
);

export const loadMoviesFailure = createAction(
  '[Movies API] Movies Load Failure',
  props<{ error: string }>()
);
