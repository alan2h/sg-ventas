import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { ListadoComponent } from './components/articulos/listado/listado.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/shared/main/main.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { AltaComponent } from './components/articulos/alta/alta.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    ListadoComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    SidebarComponent,
    AltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }