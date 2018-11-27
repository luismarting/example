import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvt-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  nombre: string;
  constructor() { }

  ngOnInit() {
    this.nombre = 'pedro';
  }

  btnBorrar ()
  {
    this.nombre = '';
  }
 
}
