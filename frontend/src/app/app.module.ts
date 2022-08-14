import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

// components
import { MovieListComponent } from './components/content/movie-list/movie-list.component';
import { HeaderComponent } from './components/common/header/header.component';
import { MovieItemComponent } from './components/content/movie-item/movie-item.component';
import { SearchComponent } from './components/common/search/search.component';
import { MovieDetailsComponent } from './components/content/movie-details/movie-details.component';
import { TagListComponent } from './components/common/tag-list/tag-list.component';
import { TagDirective } from './directives/tag.directive';

// services

import { CurrentParamsService } from './services/currentParamsService/current-params.service';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

// store
import { moviesReducer } from './store/movie/movie.reducers';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './store/movie/movie.effects';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    HeaderComponent,
    MovieItemComponent,
    SearchComponent,
    MovieDetailsComponent,
    TagListComponent,
    TagDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ movies: moviesReducer }),
    EffectsModule.forRoot([MovieEffects]),
    // Angular Material
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [CurrentParamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
