import { createReducer, on } from '@ngrx/store';
import { set_brands } from './brands.actions';

export const initialState = [];

const _brandReducer = createReducer(
    initialState,
    on(set_brands, (state, {marcas}) => marcas)
)

export function brandReducer(state, action) {
    return _brandReducer(state, action);
  }