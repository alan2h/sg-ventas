import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ArticulosService } from '../../../services/articulos.service';

// complementos
import { MarcasService } from '../../../services/complementos/marcas/marcas.service';
import { RubrosService } from '../../../services/complementos/rubros/rubros.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public id_articulo;
  public articulo;

  public image:string;

  public rubros:any;
  public marcas:any;

  articuloForm = new FormGroup({
    codigo        : new FormControl('', [Validators.required]),
    nombre        : new FormControl('', [Validators.required]),
    descripcion   : new FormControl(''),
    rubro         : new FormControl(null, [Validators.required]),
    marca         : new FormControl(null),
    precio_compra : new FormControl('', [Validators.required]),
    precio_venta  : new FormControl('', [Validators.required]),
    imagen        : new FormControl('')
  })

  constructor(
    private articulo_service: ArticulosService,
    private actived_route: ActivatedRoute,
    private marcas_service: MarcasService,
    private rubros_service: RubrosService
    ) { }

  ngOnInit(): void {
    this.getIdParam();
    this.articulo_service.getCliente(this.id_articulo)
      .subscribe(data => {
        this.articulo = data;
        this.articuloForm.patchValue({'codigo': this.articulo.codigo});
        this.articuloForm.patchValue({'nombre': this.articulo.nombre});
        this.articuloForm.patchValue({'descripcion': this.articulo.descripcion});
        this.articuloForm.patchValue({'imagen': this.articulo.imagen});

        this.image = this.articulo.imagen; // set image to template
        if (this.articulo.marca){
          this.articuloForm.patchValue({'marca': this.articulo.marca.id});
        }
        this.articuloForm.patchValue({'rubro': this.articulo.rubro.id});
        this.articuloForm.patchValue({'precio_compra': this.articulo.precio_compra});
        this.articuloForm.patchValue({'precio_venta': this.articulo.precio_venta});
      })

      this.marcas_service.getMarcas()
        .subscribe(data =>  this.marcas = data)
      this.rubros_service.getRubros()
        .subscribe(data => this.rubros = data )
  }

  getIdParam(){
    this.actived_route.params.subscribe(param => {
      this.id_articulo = param['id']
    })
  }

  onSubmit(){
    console.log(this.articuloForm)
  }

}
