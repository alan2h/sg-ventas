import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { ListadoComponent } from './components/articulos/listado/listado.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/shared/main/main.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { AltaComponent } from './components/articulos/alta/alta.component';
import { MarcasComponent } from './components/complementos/marcas/marcas.component';
import { RubrosComponent } from './components/complementos/rubros/rubros.component';
import { DeleteComponent } from './components/articulos/delete/delete.component';
import { Page404Component } from './components/page404/page404.component';
import { EditarComponent } from './components/articulos/editar/editar.component';

import { MarcasModule } from './components/complementos/marcas/marcas.module'



@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    ListadoComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    SidebarComponent,
    AltaComponent,
    MarcasComponent,
    RubrosComponent,
    DeleteComponent,
    Page404Component,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MarcasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
