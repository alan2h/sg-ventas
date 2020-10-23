import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ArticulosService } from '../../../services/articulos.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  articulo;
  id_articulo;

  constructor( 
    private router: Router,
    private active_route: ActivatedRoute,
    private articulos_service: ArticulosService
  ) { }

  ngOnInit(): void {
    this.active_route.params.subscribe(params => {
      this.id_articulo = params['id']; 
      this.loadArticle(this.id_articulo);
    })
    
  }

  deleteArticle(){
    this.articulos_service.deleteCliente(this.id_articulo)
    .subscribe(data => {
      this.router.navigate(['/articulos/listado', {'mensaje': 'Eliminado con éxito', 'status': 'danger'}])
    })
  }

  loadArticle(id){
    this.articulos_service.getCliente(id)
      .subscribe(data => {
        this.articulo = data;
      })
  }


  cancelDelete(){
    this.router.navigate(['/articulos/listado'])
  }

}
