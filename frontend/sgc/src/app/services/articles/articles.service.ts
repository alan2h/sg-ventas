import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { articleList } from '../../models/articles.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpClient
  ) { }
  

  getArticles():Observable<articleList> {
    return this.http.get<articleList>(`${ environment.url }articulos/api/`, {headers:{'Authorization' :`Token ${localStorage.getItem('token')}`}})
  }

}
