import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';

import { MarcasService } from '../../../../services/complementos/marcas/marcas.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-marcas',
  templateUrl: './listado-marcas.component.html',
  styleUrls: ['./listado-marcas.component.css']
})
export class ListadoMarcasComponent implements OnInit {

  marcas:any;
  subscription_marcas: Subscription;

  constructor(
    private marca_service: MarcasService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.marca_service.getMarcasListado().subscribe(data => {
     this.marcas = data['results'];
     console.log(this.marcas)
    })
  }

  abrirAlta(){
    this.router.navigate(['/complementos/marcas/alta'])
  }

}
