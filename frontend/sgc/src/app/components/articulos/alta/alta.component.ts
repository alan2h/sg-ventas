import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  articuloForm = new FormGroup({
    codigo: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    descripcion : new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.articuloForm.controls.nombre.value, 'nombre');
    console.log(this.articuloForm.controls.codigo.value, 'codigo');
    console.log(this.articuloForm.controls.codigo.value, 'descripcion');
  }

  
}
