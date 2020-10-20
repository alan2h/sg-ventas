import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../../services/articulos.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public articulos;

  constructor( private articulos_service: ArticulosService,
               private router: Router ) { }

  ngOnInit(): void {
    this.articulos_service.getClientes()
      .subscribe(data => {
        this.articulos = data['results'];
      })
  }

  abrirAlta(){
    /*
      link para abrir el alta del articulos
    */
    this.router.navigate(['/articulos/alta']);
  }

}
