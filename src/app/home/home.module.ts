import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from '../about/about.component';
import { TareasComponent } from '../tareas/tareas.component';
import { SaludoComponent } from './saludo/saludo.component';
import { FormsModule } from '@angular/forms';
import { SaludoLocalComponent } from './saludo-local/saludo-local.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, TareasComponent, SaludoComponent,SaludoLocalComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
