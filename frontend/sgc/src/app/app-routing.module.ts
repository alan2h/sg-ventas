import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

// ---- APPS -----
import { ArticulosComponent } from './components/articulos/articulos.component';
import { routes_articulos } from './components/articulos/articulos.component.routes';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'articulos', component: ArticulosComponent,
    children: routes_articulos,
    canActivate: [AuthGuardService]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ArticulosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
