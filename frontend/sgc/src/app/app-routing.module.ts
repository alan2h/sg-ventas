import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//----------apps-----------------
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ListComponent } from './components/articles/list/list.component';
import { AddComponent } from './components/articles/add/add.component';

// ---- page error --------------
import { Page404Component } from './components/page404/page404.component';

//----- guard router ----------
import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home' , component: HomeComponent, canActivate: [AuthGuardService]  },
  { path: 'articles', component:ArticlesComponent, canActivate: [AuthGuardService], 
    children: [
          {
            path: 'list', // child route path
            component: ListComponent, // child route component that the router renders
          },
          {
            path: 'add', // child route path
            component: AddComponent, // child route component that the router renders
          }
      ],
  },
  { path:"", pathMatch:"full", redirectTo:"login" },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
