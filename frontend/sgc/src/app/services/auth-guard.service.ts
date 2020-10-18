import { Injectable } from '@angular/core';

import { Router, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router ) { }

  canActivate(): boolean{
    if (typeof localStorage.token === 'undefined') { // en caso de que ya no este el localstorage redirecciono al login
      this.router.navigate(['login']) // en caso de que no este validado
      return false
    }else{
      return true
    }
  }

}
