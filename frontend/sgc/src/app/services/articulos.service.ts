import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private url_send:string;

  constructor(private http: HttpClient) { }

  getCliente(id:string){
    return this.http.get(`${ environment.url }articulos/api//${id}`, {headers: {"Authorization": `Token ${localStorage.getItem('token')}`}})
  }

  searchCliente(codigo?:string, nombre?:string, descripcion?:string, precio_venta?:string, precio_compra?:string, marca?:string, rubro?:string, nombre_order?:string, descripcion_order?:string){
    return this.http.get(`${ environment.url }articulos/api/?codigo=${codigo}&nombre=${nombre}&descripcion=${descripcion}&precio_venta=${precio_venta}&precio_compra=${precio_compra}&marca=${marca}&rubro=${rubro}&nombre_order=${nombre_order}`, {headers: {"Authorization": `Token ${localStorage.getItem('token')}`}})
  }

  deleteCliente(id:string){
    return this.http.delete(`${ environment.url }articulos/api//${id}`, {headers: {"Authorization": `Token ${localStorage.getItem('token')}`}})
  }

  getClientes(url?:string) { 
    if (url){ this.url_send = url; }else{ this.url_send = `${environment.url}articulos/api/`}
    return this.http.get(`${this.url_send}`,  {headers: {"Authorization": `Token ${localStorage.getItem('token')}`}}) }
  
  addCliente(articulo){
    return this.http.post(`${ environment.url }articulos/api/`, articulo, {headers: {"Authorization": `Token ${localStorage.getItem('token')}`}})
  }

  updateCliente(id:string, articulo:any){
    return this.http.put(`${ environment.url }articulos/api//${id}`, articulo, {headers: {"Authorization": `Token ${localStorage.getItem('token')}`}})
  }

}
