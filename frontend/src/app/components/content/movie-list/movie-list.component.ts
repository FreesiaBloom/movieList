import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie-service';
import { GenreType } from 'src/app/shared/enums/GenreType';
import { IMovie } from 'src/app/shared/interfaces/IMovie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  public movieList: IMovie[] = [];
  public searchTerm: string = '';

  constructor(private _movieService: MovieService) {
    this.getMovieListBySearchTerm('');
  }

  ngOnInit(): void {
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
