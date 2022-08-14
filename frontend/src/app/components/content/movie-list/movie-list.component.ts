import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

import { loadMovies } from 'src/app/store/movie/movie.actions';
import { selectAllMovies } from 'src/app/store/movie/movie.selectors';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent  {

  /*
  * Przykład użycia store do ładowania Movie list
  * zazwyczaj store trzeba uzywać jeśli modele aplikacji nie są ze sobą ściśle powiązanie i pozwala to komunikację między wieloma componentami.
  * Ta aplikacja nie ma skomplikowanej logiki, dlatego użyłam store bardziej w formie prezentaji.
  */
  public allMovies$ = this.store.select(selectAllMovies);

  constructor(activatedRoute: ActivatedRoute,
    private store: Store<AppState>) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        return store.dispatch(loadMovies({searchTerm: params['searchTerm']}));
      }
      if (params['tag']) {
        return this.filterMovie(params['tag']);
      }
      return store.dispatch(loadMovies({searchTerm: ''}));
    });
  }

  public filterMovie(tag: string) {
    if (tag) return this.store.dispatch(loadMovies({searchTerm: tag}));
    return this.store.dispatch(loadMovies({searchTerm: ''}));
  }
}
