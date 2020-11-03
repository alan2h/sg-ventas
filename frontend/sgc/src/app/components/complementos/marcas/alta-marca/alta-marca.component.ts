import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { MarcasService } from '../../../../services/complementos/marcas/marcas.service';

@Component({
  selector: 'app-alta-marca',
  templateUrl: './alta-marca.component.html',
  styleUrls: ['./alta-marca.component.css']
})
export class AltaMarcaComponent implements OnInit {

  mensaje:string;
  status :string;

  marcaForm = new FormGroup({
    descripcion: new FormControl('', [Validators.required])
  })

  constructor(
    private router       :Router,
    private marca_service: MarcasService
  ) { }

  ngOnInit(): void {}

  cancelar(){
    this.router.navigate(['/complementos/marcas/listado'])
  }

  guardarMarca(){
    const formData = new FormData();
    formData.append('descripcion', this.marcaForm.controls.descripcion.value);
    this.marca_service.addMarca(formData).subscribe(data => {
      //this.router.navigate([''])
      this.mensaje = `La marca con el código ${data['pk']} se agrego correctamente`;
      this.status  = 'success';
      this.router.navigate(['/complementos/marcas/listado', {'mensaje': this.mensaje, 'status': this.status}])
    })
  }
}
