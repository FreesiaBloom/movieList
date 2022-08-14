import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { setSearchTerm, resetSearchTerm, getSearchTerm } from './searchTerm.actions';

export const initialState = '';

export const searchTermReducer = createReducer(
  initialState,
  on(setSearchTerm, (state, { content }) =>
    content
  ),
  on(getSearchTerm, (state) =>
    state
  ),
  on(resetSearchTerm, (state) => '')
);
