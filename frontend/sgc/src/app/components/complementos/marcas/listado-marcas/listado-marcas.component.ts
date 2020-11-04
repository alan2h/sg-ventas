import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MarcasService } from '../../../../services/complementos/marcas/marcas.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-marcas',
  templateUrl: './listado-marcas.component.html',
  styleUrls: ['./listado-marcas.component.css']
})
export class ListadoMarcasComponent implements OnInit, OnDestroy {

  order              :string = 'sorting asc';
  marcas             :Array<any>;
  subscription_marcas:Subscription;
  mensaje            :string;
  status             :string;
  pagina_siguiente   :string;
  pagina_atras       :string;

  constructor(
    private marca_service: MarcasService,
    private router: Router,
    private activated_route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.subscription_marcas = this.marca_service.getMarcasListado().subscribe(data => this.makePagination(data))
    this.activated_route.params.subscribe(params => {
      this.mensaje = params['mensaje'];
      this.status  = params['status']
    })
  }

  redirectPage(url:string){
    this.subscription_marcas = this.marca_service.getMarcasUrl(url).subscribe(data => this.makePagination(data))
  }

  makePagination(data:Object){
    this.marcas = data['results'];
    this.pagina_siguiente = data['next'];
    this.pagina_atras = data['previous'];
  }
  abrirAlta(){ this.router.navigate(['/complementos/marcas/alta']) }
  ngOnDestroy(){ this.subscription_marcas.unsubscribe(); }
}
