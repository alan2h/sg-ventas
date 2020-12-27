import { createReducer, on } from '@ngrx/store';
import { set_articles } from './articles.actions';
 
export const initialState = {};
 
const _articleReducer = createReducer(
  initialState,
  on(set_articles, (state, {articles}) => articles )
);
 
export function articleReducer(state, action) {
  return _articleReducer(state, action);
}