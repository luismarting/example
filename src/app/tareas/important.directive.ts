import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dvtImportant]'
})
export class ImportantDirective implements OnInit{
  @Input() dvtImportant: string;
  ngOnInit(): void {
    const html = `¡${this.dvtImportant}! ` + this.eTarget.nativeElement.innerHTML;
    this.eTarget.nativeElement.innerHTML = html ;
  }

  constructor(private eTarget: ElementRef) {    
  }

}
