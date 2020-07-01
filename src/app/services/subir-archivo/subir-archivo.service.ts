import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  constructor( private http: HttpClient) {


  }


  subirArchivo( archivo: File, tipo: string, id: string){


  const url = URL_SERVICIOS + '/upload/' + tipo + '/' + id;
  const formData = new FormData();
  formData.append('imagen', archivo);
  return this.http.put(url, formData, {reportProgress: true})
   .pipe( map(res => {
     console.log(res);
     return res;
   }));


  }

  seleccionImage(event){
    console.log(event);
  }
}
