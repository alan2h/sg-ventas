import { createAction, props } from '@ngrx/store';
import { Marca } from '../../models/articles.models';

export const set_brands = createAction(
    '[Brands] Load',
    props<{marcas: Marca[]}>()
)