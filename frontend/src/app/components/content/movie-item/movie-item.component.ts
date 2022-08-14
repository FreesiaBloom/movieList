import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/shared/interfaces/IMovie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {

  @Input()
  public movie!: IMovie;

  constructor() { }
}
