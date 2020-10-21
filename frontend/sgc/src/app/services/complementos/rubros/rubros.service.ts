import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RubrosService {

  constructor(private http: HttpClient) { }

  getRubros() {
    return this.http.get(`${environment.url}articulos/api/rubro/`, {headers: {"Authorization": `Token ${localStorage.getItem('token')}`}})
  }

}
