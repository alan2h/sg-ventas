
import { createAction, props } from '@ngrx/store';
import { articleList } from 'src/app/models/articles.models';

export const set_articles = createAction(
    '[Articles] Load',
    props<{ articles:articleList }>()
    );