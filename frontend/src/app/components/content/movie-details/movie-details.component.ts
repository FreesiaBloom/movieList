import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { MovieService } from 'src/app/services/movie-service';
import { IMovie } from 'src/app/shared/interfaces/IMovie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public movie: IMovie | undefined;

  constructor(private _movieService: MovieService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      console.log(params);
      if (params['movieId']) {
        this.getMovie(Number(params['movieId']));
      }
    });
  }

  ngOnInit(): void {
  }

  private getMovie(movieId: number): void {
    this._movieService.getMovieById(movieId).subscribe((response) => {
      this.movie = response;
    });
  }

}
