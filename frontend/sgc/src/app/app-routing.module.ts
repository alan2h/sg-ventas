import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

// ---- APPS -----
import { ArticulosComponent } from './components/articulos/articulos.component';
import { MarcasComponent } from './components/complementos/marcas/marcas.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { routes_articulos } from './components/articulos/articulos.component.routes';
import { routes_marcas } from './components/complementos/marcas/marcas.component.routes';
// ---- page error ----
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: 'articulos', component: ArticulosComponent,
    children: routes_articulos,
    canActivate: [AuthGuardService]
  },
  {
    path: 'complementos/marcas', component: MarcasComponent,
    children: routes_marcas,
    canActivate: [AuthGuardService]
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
