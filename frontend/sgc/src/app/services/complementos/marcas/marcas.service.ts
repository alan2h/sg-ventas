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

  getMarcasListado(){
    return this.http.get(`${environment.url}articulos/api/marca/`, {headers: {"Authorization": `Token ${localStorage.getItem('token')}`}})
  }

  addMarca(marca:any){
    return this.http.post(`${environment.url}articulos/api/marca/`, marca, {headers: {"Authorization": `Token ${localStorage.getItem('token')}`}})
  }

  getMarcasUrl(url:string){
    return this.http.get(`${url}`, {headers:  {"Authorization": `Token ${localStorage.getItem('token')}`}})
  }

}
