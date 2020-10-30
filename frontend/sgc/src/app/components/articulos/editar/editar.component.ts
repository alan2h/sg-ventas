import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import * as jquery from 'jquery';

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

  imageFile: {link: string, file: any, name: string};

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
    private router: Router,
    private actived_route: ActivatedRoute,
    private marcas_service: MarcasService,
    private rubros_service: RubrosService
    ) { }

  ngOnInit(): void {
    this.getIdParam();
    let id_marca = '';
    let id_rubro = '';
    this.articulo_service.getCliente(this.id_articulo)
      .subscribe(data => {
        this.articulo = data;
        this.articuloForm.patchValue({'codigo': this.articulo.codigo});
        this.articuloForm.patchValue({'nombre': this.articulo.nombre});
        this.articuloForm.patchValue({'descripcion': this.articulo.descripcion});
        this.articuloForm.patchValue({'imagen': this.articulo.imagen});
        this.articuloForm.patchValue({'precio_compra': this.articulo.precio_compra});
        this.articuloForm.patchValue({'precio_venta': this.articulo.precio_venta});
        this.image = this.articulo.imagen; // set image to template 
        id_rubro = this.articulo.rubro.id;
        id_marca = this.articulo.marca.id;
        
      })

      this.marcas_service.getMarcas()
        .subscribe(data =>  this.marcas = data )
      this.rubros_service.getRubros()
        .subscribe(data => this.rubros = data )

      jquery('.select').select2(); // insert select2
      jquery('#id_rubro').val(id_rubro).trigger('change'); // set value select2
        if (this.articulo.marca){ jquery('#id_marca').val(id_marca).trigger('change') } // set value select2
  }

  getIdParam(){
    this.actived_route.params.subscribe(param => {
      this.id_articulo = param['id']
    })
  }

  imagesPreview(event) {
    if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();

        reader.onload = (_event: any) => {
            this.imageFile = {
                link: _event.target.result,
                file: event.srcElement.files[0],
                name: event.srcElement.files[0].name
            };
        };
        reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('codigo', this.articuloForm.controls.codigo.value);
    formData.append('nombre', this.articuloForm.controls.nombre.value);
    formData.append('descripcion', this.articuloForm.controls.descripcion.value);
    formData.append('rubro', jquery('#id_rubro').val());
    formData.append('precio_compra', this.articuloForm.controls.precio_compra.value);
    formData.append('precio_venta',  this.articuloForm.controls.precio_venta.value);
    if (jquery('#id_marca').val()){formData.append('marca', jquery('#id_marca').val())};
    if (this.imageFile){formData.append('imagen',  this.imageFile.file, this.imageFile.name);}
  
    this.articulo_service.updateCliente(this.id_articulo, formData)
      .subscribe(data => {
         if (data['status'] == 'success'){
            let mensaje:string;
            mensaje = `El artículo ${data['pk']} se actualizo con éxito`;
            this.router.navigate(['/articulos/listado', {'mensaje': mensaje, 'status': 'success'}])
         }
      })
  }

  onCancel(){
    this.router.navigate(['/articulos/listado'])
  }

}
