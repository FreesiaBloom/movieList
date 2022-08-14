import { MovieState } from "./movie/movie.reducers";

export interface AppState {
  movies: MovieState;
}
