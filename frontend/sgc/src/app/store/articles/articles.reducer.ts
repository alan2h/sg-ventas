import { createReducer, on } from '@ngrx/store';
import { set_articles } from './articles.actions';
import { articleList } from '../../models/articles.models';
 
export const initialState = {};
 
const _articleReducer = createReducer(
  initialState,
  on(set_articles, (state, {articles}) => state = articles )
);
 
export function articleReducer(state, action) {
  return _articleReducer(state, action);
}