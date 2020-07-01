import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from 'src/app/models/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor( private _usuarioService: UsuarioService) { }

    usuario: Usuario;
    imagenSubir: File;
    imagenTemp: string | ArrayBuffer;

  ngOnInit(): void {
    this.usuario = this._usuarioService.usuario;
  }


  guardar(usuario: Usuario){
    this.usuario.nombre = usuario.nombre;
    if (!this.usuario.google){
      this.usuario.email = usuario.email;

    }

    this._usuarioService.actualizarUsuario(this.usuario)
      .subscribe( resp => {
        console.log(resp);
      });
  }

  seleccionImage(archivo: File){

    if (!archivo){
      this.imagenSubir = null;
      return; }

    if ( archivo.type.indexOf('image') < 0){
     Swal.fire('Solo imagenes', 'El archvo seleccionado no es una imagen', 'error');
     this.imagenSubir = null;
     return;
   }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    reader.readAsDataURL(archivo);
    reader.onloadend = () => this.imagenTemp = reader.result;
    

  }
  cambiarImagen(){
    this._usuarioService.cambiarImagen(this.imagenSubir, this.usuario._id);

  }

}
