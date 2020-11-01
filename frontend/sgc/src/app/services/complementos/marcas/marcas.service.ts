import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor( private http: HttpClient ) { }

  getMarcas(){
    return this.http.get(`${environment.url}articulos/api/marca//marca_select`, {headers:  {"Authorization": `Token ${localStorage.getItem('token')}`}})
  }

}
