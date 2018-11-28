import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'dvt-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    const store: string = JSON.stringify(this.aTareas);
    localStorage.setItem('tareas',store);
  }

  oTarea: Tarea;
  aTareas: Array<Tarea>;

  constructor() { }

  ngOnInit() {
    this.oTarea = new Tarea();
    const store = JSON.parse(localStorage.getItem('tareas'));
    this.aTareas = store ? store : [];
  }

  addTarea() {
    this.aTareas.push(Object.assign({}, this.oTarea));
    
    this.oTarea.nombre = '';
    console.log(this.aTareas);

    // let o = {nombre: 'Pepe'};
    // let o2 = JSON.parse(JSON.stringify(o));
    // let o2 = Object.assign({}, o)

  }
  deleteTarea(i){
    this.aTareas.splice(i,1);
  }

}