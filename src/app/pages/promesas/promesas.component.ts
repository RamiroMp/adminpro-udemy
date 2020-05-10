import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres()
    .then(
      (e ) => console.log('termino', e))
    .catch(
      (error) => {console.error('fue mal', error); }
    );
  }

  ngOnInit(): void {
  }

  contarTres(): Promise<boolean> {

    return new Promise( (resolve, reject) => {

      let contador = 0;
      const intervalo = setInterval(() => {

        contador += 1 ;
        console.log(contador);
        if ( contador === 3 ){
          // reject('simple error');
          resolve(true);
          clearInterval(intervalo);

        }

      }, 1000);

    });




  }

}
