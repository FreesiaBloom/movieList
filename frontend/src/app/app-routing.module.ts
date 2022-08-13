import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/content/movie-list/movie-list.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  },
  {
    path: 'search/:searchTerm',
    component: MovieListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
