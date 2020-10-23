import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private url_send:string;

  constructor(private http: HttpClient) { }

  getClientes(url?:string) { 
    if (url){
      this.url_send = url;
    }else{
      this.url_send = `${environment.url}articulos/api/`;
    }
    return this.http.get(`${this.url_send}`,  {headers: {"Authorization": `Token ${localStorage.getItem('token')}`}}) }
  
    //getClientesUrl(url?:string) { return this.http.get(`${url}`,  {headers: {"Authorization": `Token ${localStorage.getItem('token')}`}}) }

  addCliente(articulo){
    return this.http.post(`${ environment.url }articulos/api/`, articulo, {headers: {"Authorization": `Token ${localStorage.getItem('token')}`}})
  }

}
