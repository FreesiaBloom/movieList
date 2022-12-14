import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/MovieService/movie-service';
import { Movie } from 'src/app/shared/interfaces/Movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

  public movie: Movie | undefined;
  public allMovies$: any;

  constructor(private _movieService: MovieService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      console.log(params);
      if (params['movieId']) {
        this.getMovie(Number(params['movieId']));
      }
    });
  }

  private getMovie(movieId: number): void {
    this._movieService.getMovieById(movieId).subscribe((response) => {
      this.movie = response;
    });
  }

}
