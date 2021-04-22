import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { TicketRegistrationComponent } from './ticket-registration/ticket-registration.component';


const routes: Routes = [
  {path: '', component : EntryPageComponent},
  {path: 'employee-login', component : LoginEmployeeComponent},
  {path: 'admin-login', component : LoginAdminComponent},
  {path: 'employee-registration', component : EmployeeRegistrationComponent},
  {path: 'ticket-registration', component : TicketRegistrationComponent},
  {path: '**', component : PageNotFoundComponent},

  // {path: '', component : },
  // {path: '', component : },
  // {path: '', component : },
  // {path: '', component : },
  // {path: '', component : },
  // {path: '', component : },
  // {path: '', component : },
  // {path: '', component : },
  // {path: '', component : },
  // {path: '', component : }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
