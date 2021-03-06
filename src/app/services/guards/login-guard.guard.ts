import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor( public _usuarioService: UsuarioService,
               private router: Router){

  }
  canActivate()
{
   if ( this._usuarioService.estaLogueado()){
     console.log('Paso el Guard');
     return true;
   } else {
     console.log('Bloqueado por el Guard');
     this.router.navigate(['/login']);
   }
    
  }

}
