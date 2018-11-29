import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { CursosComponent } from './cursos.component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormMdComponent } from './form-md/form-md.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CursosComponent, FormMdComponent,FormTdComponent],
  imports: [
    CommonModule,
    FormsModule,
    CursoRoutingModule
  ]
})
export class CursoModule { }
  