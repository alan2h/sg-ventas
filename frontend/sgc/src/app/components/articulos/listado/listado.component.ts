import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticulosService } from '../../../services/articulos.service';

import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit, OnDestroy {

  subscription_articulo: Subscription;

  public articulos;
  public siguiente:string;
  public atras:string;
  public mensaje:string;
  public status:string;

  public nombre_order:string = 'desc';

  txt_search = {
    codigo       : '',
    nombre       : '',
    descripcion  : '',
    precio_venta : '',
    precio_compra: '',
    marca: '',
    rubro: '',
  }

  constructor( private articulos_service: ArticulosService,
               private router: Router,
               private activated_router: ActivatedRoute ) { }

  ngOnInit(): void {
    this.subscription_articulo = this.articulos_service.getClientes().subscribe(data => this.receivData(data))
    this.activated_router.params.subscribe(params => {
      this.mensaje = params['mensaje'],
      this.status = params['status']
    })
  }

  buscarCodigo(texto:string){       this.txt_search.codigo = texto; }
  buscarNombre(texto:string){       this.txt_search.nombre = texto; }
  buscarDescripcion(texto:string){  this.txt_search.descripcion = texto; }
  buscarPrecioVenta(texto:string){  this.txt_search.precio_venta = texto; }
  buscarPrecioCompra(texto:string){ this.txt_search.precio_compra = texto; }
  buscarMarca(texto:string){        this.txt_search.marca = texto; }
  buscarRubro(texto:string){        this.txt_search.rubro = texto; }

  order(campo:string){
    if (campo == 'Nombre'){
      if (this.nombre_order == 'asc'){
        this.nombre_order = 'desc';
      }else{
        this.nombre_order = 'asc';
      }
    }
    this.buscar(); // order by selection 
  }

  buscar(){
    this.articulos_service.searchCliente(this.txt_search.codigo, this.txt_search.nombre, 
      this.txt_search.descripcion, this.txt_search.precio_venta, 
      this.txt_search.precio_compra, this.txt_search.marca, this.txt_search.rubro, this.nombre_order)
      .subscribe(data => this.receivData(data))
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

  ngOnDestroy(): void{
    this.subscription_articulo.unsubscribe();
  }

}
