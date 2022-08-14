import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Movie } from 'src/app/shared/interfaces/Movie.model';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getMovieList(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>("/assets/movies-data.json");
  }

  getMovieListBySearchTerm(searchTerm: string): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>("/assets/movies-data.json")
      .pipe(
        map((data: Movie[]) => {
          return data.filter((movie: Movie) => {
            return (movie.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || movie.genres?.find((item: string) => {
              return item === searchTerm;
            }));
          });
        })
      );
  }

  getMovieById(movieId: number): Observable<Movie | undefined> {
    return this.httpClient.get<Movie[]>("/assets/movies-data.json")
      .pipe(
        map((data: Movie[]) => {
          return data.find((movie: Movie) => {
            return movie.id === movieId;
          });
        })
      );
  }
}
