import { Injectable } from '@angular/core';
import { of, from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { loadMovies, loadMoviesFailure, loadMoviesSuccess } from './movie.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MovieService } from 'src/app/services/MovieService/movie-service';

@Injectable()
export class MovieEffects {
  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) {}

  // Run this code when a loadMovies action is dispatched
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies),
      switchMap((action) =>
        // Call the getMovies method, convert it to an observable
        from(this.movieService.getMovieListBySearchTerm(action.searchTerm)).pipe(
          // Take the returned value and return a new success action containing the movies
          map((movies) => loadMoviesSuccess({ movies: movies })),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(loadMoviesFailure({ error })))
        )
      )
    )
  );
}
