import { Component, OnInit, OnDestroy } from '@angular/core';
import { SucursalesService } from '../../services/sucursales/sucursales.service';
import { LoginService } from '../../services/auth/login.service';
import { Subscription } from 'rxjs'

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public sucursales: any;
  public subscription_sucursales: Subscription;
  public username = "";
  public password = "";

  constructor(
    private sucursales_service: SucursalesService,
    private login_service : LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.subscription_sucursales = this.sucursales_service.getSucursales().subscribe(data => {
      this.sucursales = data;
    })
  }

  ngOnDestroy(){
    this.subscription_sucursales.unsubscribe();
  }

  onSubmit(){
    console.log(this.username, this.password);
    let formData = new FormData();
    formData.append('username', this.username);
    formData.append('password', this.password);
    this.login_service.setLogin(formData).subscribe(data => {
      localStorage.setItem('token', data['token']);
      this.router.navigate(['/home'])
    })
  }

}
