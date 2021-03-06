import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import {map} from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

   usuario: Usuario;
   token: string;

  constructor( public http: HttpClient, private router: Router, private _subirArchivoService: SubirArchivoService) {
    this.cargarStorage();

    console.log('servicio de usuario listo');
  }

  logout(){
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);

  }

  estaLogueado(){

  return ( this.token.length > 5) ? true : false;
  }

  cargarStorage(){
     if ( localStorage.getItem('token'))
     {
       this.token = localStorage.getItem('token');
       this.usuario = JSON.parse(localStorage.getItem('usuario'));
     }else {
       this.token = '';
       this.usuario = null;
     }
  }

  guardarStorage(id: string, token: string, usuario: Usuario  ){
       localStorage.setItem('id', id);
       localStorage.setItem('token', token);
       localStorage.setItem('usuario', JSON.stringify(usuario));
       this.usuario = usuario;
       this.token = token;

  }

  // Servicio Login con Google

  loginGoogle( token: string){
    const url = URL_SERVICIOS + '/login/google';
    return this.http.post(url, {token})
    .pipe ( map( (resp: any) => {
      this.guardarStorage(resp.id, resp.token, resp.usuario );
      return true;

    })
    );

  }

  // Servicio de Login
  login(usuario: Usuario, recordar: boolean = false){


    if ( recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }
    const url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario)
    .pipe(map((resp: any) => {
        this.guardarStorage(resp.id, resp.token, resp.usuario);
        return true;
    }));
  }


  // Servicio de Registrar nuevo usuario

crearUsuario(usuario: Usuario){

  const url = URL_SERVICIOS + '/usuario';
  return this.http.post(url, usuario)
    .pipe(map (resp => {
      Swal.fire('El usuario se ha creado', usuario.email, 'success');
      return resp;
    }));

}



actualizarUsuario(usuario: Usuario){


    const url = URL_SERVICIOS + '/usuario/' + this.usuario._id + '?token=' + this.token;
    return this.http.put(url, usuario)
    .pipe(map( (resp: any) => {

      const usuarioDb: Usuario = resp.usuarioSave;



      Swal.fire('El usuario se ha actualizado', usuario.nombre, 'success');
      this.guardarStorage(usuarioDb._id, this.token, usuarioDb );

      return true;
    }
    ));




}


cambiarImagen( archivo: File, id: string){


this._subirArchivoService.subirArchivo(archivo, 'usuarios', id)
.subscribe ((resp: any) => {
  console.log(resp);
  this.usuario.img = resp.usuario.img;
  Swal.fire('Imagen actualizada', this.usuario.nombre, 'success');
  this.guardarStorage( id, this.token, this.usuario );
});


}




}
