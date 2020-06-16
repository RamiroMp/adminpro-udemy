import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// tslint:disable-next-line: import-spacing
import {SettingsService, SidebarService, SharedService, UsuarioService, LoginGuardGuard} from  './service.index';


@NgModule({
  declarations: [],
  providers: [SharedService, SidebarService, SettingsService, UsuarioService,LoginGuardGuard],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceModule { }
