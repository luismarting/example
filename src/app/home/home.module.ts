import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from '../about/about.component';
import { SaludoComponent } from './saludo/saludo.component';
import { FormsModule } from '@angular/forms';
import { SaludoLocalComponent } from './saludo-local/saludo-local.component';
import { ExpresionesComponent } from './expresiones/expresiones.component';
import { PipesComponent } from './pipes/pipes.component';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [HomeComponent, AboutComponent,  SaludoComponent,SaludoLocalComponent, ExpresionesComponent, PipesComponent, TruncatePipe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
