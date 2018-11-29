import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'dvt-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  altura: number;
  precio: number;
  producto: string;
  fecha: Data;
  frase:string;
  constructor() { }

  ngOnInit() {
    this.producto = 'bolígrafo';
    this.precio = 23;
    this.altura = 32.754;
    this.fecha = new Date();
    this.frase = 'Un anillo'
  }

}
