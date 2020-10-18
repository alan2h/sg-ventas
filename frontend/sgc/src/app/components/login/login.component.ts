import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message_error:string;

  constructor( private login:AuthService, private router:Router ) { }

  ngOnInit(): void {
  }

  addLogin(form:NgForm){
    if (form.valid){
      this.login.getToken(form.value)
        .subscribe(
          data => {
          localStorage.setItem('token', data['token']); // seteo el item que haya guardado correctamente
          console.log(localStorage.getItem('token')) // pruebo que haya guardado bien el token
          this.router.navigate(['home'])
        },
        err => {
          this.message_error = 'El usuario y/o contraseña no son correctos'; // en caso de que el login fallara
        })
    }else{
      if (form.controls.username.status == 'INVALID') this.message_error = 'El nombre de usuario es requerido'
      if (form.controls.password.status == 'INVALID') this.message_error = 'Debe ingresar una contraseña'
    }
    
  }

}
