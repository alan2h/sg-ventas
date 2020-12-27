import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';
import { Marca } from 'src/app/models/articles.models';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(
    private http: HttpClient
  ) { }

  getBrand():Observable<any>{
    return this.http.get( `${ environment.url }articulos/api/marca//marca_select`, {headers:{'Authorization' :`Token ${localStorage.getItem('token')}`}})
  }
}
