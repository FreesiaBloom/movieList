import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie-service';
import { IMovie } from 'src/app/shared/interfaces/IMovie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  public movieList: IMovie[] = [];
  data: any;

  constructor(private _movieService: MovieService) {
    this.getMovieList();
    this.getMovieListBySearchTerm('Bad');
  }

  ngOnInit(): void {
    console.log(this.movieList);
  }

  private getMovieList(): void {
    this._movieService.getMovieList().subscribe((response: IMovie[]) => {
      this.movieList = response;
    });
  }

  private getMovieListBySearchTerm(searchTerm: string): void {
    this._movieService.getMovieListBySearchTerm(searchTerm)
      .subscribe((response: IMovie[]) => {
        this.movieList = response;
      });
  }
}
