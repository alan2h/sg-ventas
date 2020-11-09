import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//----------apps-----------------
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

// ---- page error --------------
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home' , component: HomeComponent  },
  { path:"", pathMatch:"full", redirectTo:"login" },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
