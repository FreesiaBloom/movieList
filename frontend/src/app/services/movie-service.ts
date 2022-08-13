import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { IMovie } from '../shared/interfaces/IMovie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getMovieList(): Observable<IMovie[]> {
    return this.httpClient.get<IMovie[]>("/assets/movies-data.json");
  }

  getMovieListBySearchTerm(searchTerm: string): Observable<IMovie[]> {
    return this.httpClient.get<IMovie[]>("/assets/movies-data.json")
      .pipe(
        map((data: IMovie[]) => {
          return data.filter((movie: IMovie) => {
            return movie.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
          });
        })
      );
  }

  getMovieById(movieId: number): Observable<IMovie | undefined> {
    return this.httpClient.get<IMovie[]>("/assets/movies-data.json")
      .pipe(
        map((data: IMovie[]) => {
          return data.find((movie: IMovie) => {
            return movie.id === movieId;
          });
        })
      );
  }
}
