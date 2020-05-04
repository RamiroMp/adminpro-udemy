import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// tslint:disable-next-line: import-spacing
import {SettingsService, SidebarService, SharedService} from  './service.index';

@NgModule({
  declarations: [],
  providers:[SharedService, SidebarService, SettingsService],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
