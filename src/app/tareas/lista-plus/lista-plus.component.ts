import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'dvt-lista-plus',
  templateUrl: './lista-plus.component.html',
  styleUrls: ['./lista-plus.component.css']
})
export class ListaPlusComponent implements OnInit,OnDestroy {
  aTareas: Array<Tarea>;
  constructor() { }

  ngOnInit() {
    const store = JSON.parse(localStorage.getItem('tareasP'));
    this.aTareas = store ? store : [];
  }
  ngOnDestroy(): void {
    const store: string = JSON.stringify(this.aTareas);
    localStorage.setItem('tareasP',store);
  }
  addTarea(tarea){
    this.aTareas.push(tarea);
    console.log(this.aTareas);

  }
  deleteTarea(i){
    this.aTareas.splice(i,1);
  }
}
