import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/MovieService/movie-service';
import { IMovie } from 'src/app/shared/interfaces/IMovie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  public movieList: IMovie[] = [];
  public searchTerm: string = '';

  constructor(private _movieService: MovieService,
    activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        return this.getMovieListBySearchTerm(params['searchTerm']);
      }
      if (params['tag']) {
        return this.filterMovie(params['tag']);
      }
      return this.getMovieListBySearchTerm('');
    });
  }

  private getMovieListBySearchTerm(searchTerm: string): void {
    this._movieService.getMovieListBySearchTerm(searchTerm)
      .subscribe((response: IMovie[]) => {
        this.movieList = response;
      });
  }

  private getMovieListByGenres(genre: string): void {
    this._movieService.getMovieListByGenres(genre)
      .subscribe((response: IMovie[]) => {
        this.movieList = response;
      });
  }

  public searchMovie(term: string) {
    this.searchTerm = term;
    this.getMovieListBySearchTerm(this.searchTerm);
  }

  public filterMovie(tag: string) {
    if (tag) return this.getMovieListByGenres(tag);
    return this.getMovieListBySearchTerm('');
  }
}
