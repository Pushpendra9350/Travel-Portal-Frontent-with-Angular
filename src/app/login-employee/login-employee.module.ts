import { LoginEmployeeComponent } from './login-employee.component';
import { NgModule } from '@angular/core';
import { LoginAdminModule } from '../login-admin/login-admin.module';
import { EntryPageModule } from '../entry-page/entry-page.module';


@NgModule({
    imports: [
      //LoginAdminModule,
      EntryPageModule
    ],
    exports: [
      LoginEmployeeComponent
    ]
  })
  export class LoginEmployeeModule {
  
  }