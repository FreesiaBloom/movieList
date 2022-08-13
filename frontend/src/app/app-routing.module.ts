import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/content/movie-details/movie-details.component';
import { MovieListComponent } from './components/content/movie-list/movie-list.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  },
  {
    path: 'movie/:movieId',
    component: MovieDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
