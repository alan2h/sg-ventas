import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  salir(){
    localStorage.removeItem('token'); // cierro sesion
    this.router.navigate(['login']); // envio al login cuando cierro
  }

}
