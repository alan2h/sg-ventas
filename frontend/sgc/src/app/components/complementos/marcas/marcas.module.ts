import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListadoMarcasComponent } from './listado-marcas/listado-marcas.component';
import { AltaMarcaComponent } from './alta-marca/alta-marca.component'
import { MessageComponent } from '../../shared/message/message.component';


@NgModule({
  declarations: [
    ListadoMarcasComponent,
    AltaMarcaComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    MessageComponent
  ]
})
export class MarcasModule { }
