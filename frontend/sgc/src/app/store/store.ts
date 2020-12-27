import { brandReducer } from '../store/brands/brands.reducers';
import { articleReducer } from "./articles/articles.reducer";


export const storeModules = {
    articles: articleReducer,
    brands  : brandReducer
}