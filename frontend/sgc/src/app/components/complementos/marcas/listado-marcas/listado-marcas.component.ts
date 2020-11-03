import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

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

  mensaje:string;
  status :string;

  constructor(
    private marca_service: MarcasService,
    private router: Router,
    private activated_route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.marca_service.getMarcasListado().subscribe(data => {
     this.marcas = data['results'];
    })
    this.activated_route.params.subscribe(params => {
      this.mensaje = params['mensaje'];
      this.status  = params['status']
    })
  }

  abrirAlta(){
    this.router.navigate(['/complementos/marcas/alta'])
  }

}
