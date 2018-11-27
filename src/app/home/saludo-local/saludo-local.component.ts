import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'dvt-SaludoLocal-local',
  templateUrl: './saludo-local.component.html',
  styleUrls: ['./saludo-local.component.css']
})
export class SaludoLocalComponent implements OnInit {
    @ViewChild('nombreLoc')
    nombre:any;
  constructor() { }

  ngOnInit() {
  }
}
