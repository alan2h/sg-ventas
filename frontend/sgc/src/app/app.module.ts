import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/shared/main/main.component';
import { MessageComponent } from './components/shared/message/message.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { Page404Component } from './components/page404/page404.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeModules } from './store/store';

import { MaterialModule } from './material/material.module'; // materialAngular
import { environment } from '../environments/environment';
import { ListComponent } from './components/articles/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    MessageComponent,
    SidebarComponent,
    Page404Component,
    ArticlesComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot(storeModules),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
