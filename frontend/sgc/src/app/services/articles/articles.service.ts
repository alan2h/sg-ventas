import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpClient
  ) { }
  

  getArticles() {
    return this.http.get(`${ environment.url }articulos/api/`, {headers:{'Authorization' :`Token ${localStorage.getItem('token')}`}})
  }

}
