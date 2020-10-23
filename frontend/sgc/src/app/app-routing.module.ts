import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

// ---- APPS -----
import { ArticulosComponent } from './components/articulos/articulos.component';
import { HomeComponent } from './components/home/home.component';
import { routes_articulos } from './components/articulos/articulos.component.routes';
import { LoginComponent } from './components/login/login.component';

// ---- page error ----
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: 'articulos', component: ArticulosComponent,
    children: routes_articulos,
    canActivate: [AuthGuardService]
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
