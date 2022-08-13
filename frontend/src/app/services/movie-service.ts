import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { IMovie } from '../shared/interfaces/IMovie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getMovieList(): Observable<IMovie[]> {
    return this.httpClient.get<IMovie[]>("/assets/movies-data.json");
  }
}
