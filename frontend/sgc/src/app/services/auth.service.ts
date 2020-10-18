import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


class Login {
  username: string;
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getToken(login:Login){
    return this.http.post(`${environment.url}api-token-auth/`, login)
  }
}
