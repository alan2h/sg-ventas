import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//----------apps-----------------
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home' , component: HomeComponent  },
  { path:"", pathMatch:"full", redirectTo:"login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
