import { LoginAdminComponent } from './login-admin.component';
import { NgModule } from '@angular/core';
import { LoginEmployeeModule } from '../login-employee/login-employee.module';
import { EntryPageModule } from '../entry-page/entry-page.module';


@NgModule({
    imports: [
      //LoginEmployeeModule,
      EntryPageModule
      
    ],
    exports: [
      LoginAdminComponent
    ]
  })
  export class LoginAdminModule {
  
  }