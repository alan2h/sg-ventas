import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoMarcasComponent } from './listado-marcas/listado-marcas.component';
import { AltaMarcaComponent } from './alta-marca/alta-marca.component'


@NgModule({
  declarations: [
    ListadoMarcasComponent,
    AltaMarcaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MarcasModule { }
