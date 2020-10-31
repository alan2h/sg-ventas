import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//global url
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private http:HttpClient) {}

  getProveedores(){
    return this.http.get(`${environment.url}proveedores/api/`, {headers:  {"Authorization": `Token ${localStorage.getItem('token')}`}})
  }
}
