import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../../services/articulos.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public articulos;
  public siguiente:string;
  public atras:string;
  public mensaje:string;
  public status:string;

  constructor( private articulos_service: ArticulosService,
               private router: Router,
               private activated_router: ActivatedRoute ) { }

  ngOnInit(): void {
    this.articulos_service.getClientes()
      .subscribe(data => this.receivData(data))

    this.activated_router.params.subscribe(params => {
      this.mensaje = params['mensaje'],
      this.status = params['status']
    })
  }

  abrirAlta(){
    /*
      link para abrir el alta del articulos
    */
    this.router.navigate(['/articulos/alta']);
  }
  
  pageSiguiente(siguiente:string){
    this.articulos_service.getClientes(siguiente)
      .subscribe(data => this.receivData(data))
  }

  pageAtras(atras:string){
    this.articulos_service.getClientes(atras)
    .subscribe(data => this.receivData(data))
  }

  receivData(data:any){
      this.articulos = data['results'];
      this.siguiente = data['next'];
      this.atras     = data['previous'];
  }

}
