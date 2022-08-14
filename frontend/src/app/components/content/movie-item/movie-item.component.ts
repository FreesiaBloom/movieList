import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/shared/interfaces/Movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {

  @Input()
  public movie!: Movie;

  constructor() { }
}
