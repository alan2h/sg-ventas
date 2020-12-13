import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatPaginatorModule
  ],
  exports: [
    MatSnackBarModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
