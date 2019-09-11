import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  constructor() {
   }
  @ViewChild('txtProgress', {static: true}) txtProgress: ElementRef;

  @Input() progreso = 50;
  @Input('nombre') leyenda = 'Leyenda';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
  }

  onChanges(value: number) {
    if (value >= 100) {
      this.progreso = 100;
    } else if (value <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = value;
    }
    this.txtProgress.nativeElement.value = Number(this.progreso);
    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number) {
    if ((this.progreso >= 100 && valor > 0) || (this.progreso <= 0 && valor < 0)) {
      return;
    }
    this.progreso += valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

}
