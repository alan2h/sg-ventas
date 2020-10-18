import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../../services/articulos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public articulos;

  constructor( private articulos_service: ArticulosService ) { }

  ngOnInit(): void {
    this.articulos_service.getClientes()
      .subscribe(data => {
        this.articulos = data;
      })
  }

}
