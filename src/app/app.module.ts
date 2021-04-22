import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';
import { TravelPortalService } from './travel-portal.service';
import { HomePageEmployeeComponent } from './home-page-employee/home-page-employee.component';
import { HomePageAdminComponent } from './home-page-admin/home-page-admin.component';
import { NotificationComponent } from './notification/notification.component';
import { TicketRegistrationComponent } from './ticket-registration/ticket-registration.component';
import { TicketUpdateAdminComponent } from './ticket-update-admin/ticket-update-admin.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EntryPageComponent,
    LoginAdminComponent,
    LoginEmployeeComponent,
    HomePageEmployeeComponent,
    HomePageAdminComponent,
    NotificationComponent,
    TicketRegistrationComponent,
    TicketUpdateAdminComponent,
    EmployeeRegistrationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TravelPortalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
