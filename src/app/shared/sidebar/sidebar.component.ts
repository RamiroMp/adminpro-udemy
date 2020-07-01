import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/service.index';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  usuario: Usuario;

  // tslint:disable-next-line: variable-name
  constructor( public _sidebar: SidebarService, private _usuarioService: UsuarioService
            ) { }

  ngOnInit(): void {

    this.usuario = this._usuarioService.usuario;
  }


logout(){
  this._usuarioService.logout();
}
}
