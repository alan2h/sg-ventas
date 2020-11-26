import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//----------apps-----------------
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ArticlesComponent } from './components/articles/articles.component';

// ---- page error --------------
import { Page404Component } from './components/page404/page404.component';

//----- guard router ----------
import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home' , component: HomeComponent, canActivate: [AuthGuardService]  },
  { path: 'articles', component:ArticlesComponent, canActivate: [AuthGuardService] },
  { path:"", pathMatch:"full", redirectTo:"login" },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
