import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'dvt-new-tarea',
  templateUrl: './new-tarea.component.html',
  styleUrls: ['./new-tarea.component.css']
})
export class NewTareaComponent implements OnInit {
  @Output() evNewTarea:EventEmitter<any>;
  oTarea: Tarea;
  constructor() {    
    this.evNewTarea = new EventEmitter();
 }

  ngOnInit() {
    this.oTarea = new Tarea();
  }

  sendAddTarea(){
    this.evNewTarea.next(Object.assign({},this.oTarea));
    this.oTarea.nombre = '';
  }

}
