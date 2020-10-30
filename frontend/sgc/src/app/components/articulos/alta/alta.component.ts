import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as jquery from 'jquery';


// articulos services 
import { ArticulosService } from '../../../services/articulos.service';

//complementos
import { RubrosService } from '../../../services/complementos/rubros/rubros.service';
import { MarcasService } from '../../../services/complementos/marcas/marcas.service';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  /*
    nombre = models.CharField(max_length=300, null=False, blank=False)
    codigo = models.CharField(max_length=800, null=True, blank=True)
    descripcion = models.CharField(max_length=300, null=True, blank=True)
    rubro = models.ForeignKey(Rubro, null=True, blank=True,
    on_delete=models.CASCADE)
    marca = models.ForeignKey(Marca, null=True, blank=True,
    on_delete=models.CASCADE)
    precio_venta = models.DecimalField(max_digits=100, decimal_places=2,
    null=False, blank=False)
    precio_compra = models.DecimalField(max_digits=100, decimal_places=2,
    null=False, blank=False)
    imagen = models.ImageField(upload_to='articulos', null=True, blank=True)
    activo = models.BooleanField(default=True)
  */

  imageFile: {link: string, file: any, name: string};
  rubros:any;
  marcas:any;

  mensaje:string = "";
  status:string  = "";

  public articulo = {
    codigo        : '',
    nombre        : '',
    descripcion   : '',
    rubro         : '',
    marca         : '',
    precio_compra : '',
    precio_venta  : '',
    imagen        : ''
  }

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
    private rubro_service: RubrosService,
    private marca_service: MarcasService,
    private router: Router,
    private articulo_service: ArticulosService
    ) { }

  ngOnInit(): void {
    this.rubro_service.getRubros().subscribe(data => this.rubros = data) // set rubros 
    this.marca_service.getMarcas().subscribe(data => this.marcas = data) // set marcas
    //--- select 2 ----//
    jquery('.select').select2(); //initialize select2 to particular input

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
    
    this.articulo_service.addCliente(formData)
      .subscribe(data => {
        if (data['status'] == 'success'){
          this.articuloForm.reset();
          this.mensaje = `El árticulo ${this.articulo.nombre} - ${data['pk']} se agrego con éxito`;
          this.status  = 'success';
        }
      })
  }

  onCancel(){
    this.router.navigate(['articulos/listado'])
  }

  
}
