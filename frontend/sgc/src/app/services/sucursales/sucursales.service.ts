import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  

  constructor(private http: HttpClient) { }

    getSucursales(){
      return this.http.get(`${environment.url}sucursales/list/`)
    }

}
