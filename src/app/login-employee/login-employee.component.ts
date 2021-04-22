import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.css']
})
export class LoginEmployeeComponent {
  title = 'Login Employee Component';
  @Input() show_employee_login_form:boolean 

  isDisplay: boolean = true
  toggleDisplay()
  {
    this.isDisplay = !this.isDisplay
    //showemployeelogin()
    this.show_employee_login_form=!this.show_employee_login_form
  }

}
