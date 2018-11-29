import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { TareasModule } from './tareas/tareas.module';
import { AboutModule } from './about/about.module';
import {FormsModule} from '@angular/forms'

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/es';
import { BlogModule } from './blog/blog.module';
import { CursoModule } from './curso/curso.module';

// the second parameter 'es' is optional
registerLocaleData(localeFr, 'es');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    TareasModule,
    AboutModule,
    FormsModule,
    BlogModule,
    CursoModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
