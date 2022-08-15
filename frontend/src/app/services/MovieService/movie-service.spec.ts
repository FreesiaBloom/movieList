import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { of } from 'rxjs';

import { MovieService } from './movie-service';
import { HttpClient } from '@angular/common/http';
import { movieListTestData, movieTestData } from 'src/assets/movie-test-data';

describe('MovieService', () => {
  let movieService: MovieService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [MovieService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    movieService = new MovieService(httpClientSpy);
  });

  it('should be created', () => {
    expect(movieService).toBeTruthy();
  });

  it('should return expected all movies list (HttpClient called once)', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(movieListTestData));

    movieService.getMovieList().subscribe({
      next: movies => {
        expect(movies)
        .withContext('expected movielist')
        .toEqual(movieListTestData);
        done();
      },
      error: done.fail
    });

    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it('should return expected movie by id (HttpClient called once)', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(movieListTestData));

    movieService.getMovieById(1).subscribe({
      next: movies => {
        expect(movies)
        .withContext('expected movielist')
        .toEqual(movieTestData);
        done();
      },
      error: done.fail
    });

    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });
});
