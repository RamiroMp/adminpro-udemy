import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  // Decorador para abrir la referencia a una etiqueta Html
@ViewChild('txtProgress') txtProgress: ElementRef;

  // tslint:disable-next-line: no-input-rename
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output () cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {

   }

  ngOnInit(): void {
  }

  onChanges( newValue: number ){

   const elemHtml: any = document.querySelector('[name="progreso"]');
    // forma correcta de referirlo
    // this.txtProgress.nativeElement.value
   if ( newValue >= 100){
  this.progreso = 100;
  } else if ( newValue <= 0){
    this.progreso = 0;
  } else { this.progreso = newValue; }
   this.txtProgress.nativeElement.value = Number(this.progreso);
   this.cambioValor.emit(this.progreso);
  }


  cambiarValor( valor: number ){

    if ((this.progreso + valor > 100 ) ) {
      console.log(this.progreso + valor);
      return this.progreso = 100;
    } else if  (this.progreso + valor < 0 ) {
      return this.progreso = 0;
    }
    this.progreso += valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();


  }

}
