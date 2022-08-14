import { createAction, props } from '@ngrx/store';

export const setSearchTerm = createAction(
  '[Search Component] Set',
  props<{content: string}>()
);

export const resetSearchTerm = createAction('[Search Component] Reset');

export const getSearchTerm = createAction(
  '[Search Component] Get'
);
