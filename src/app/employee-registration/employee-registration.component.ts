import { Component, OnInit } from '@angular/core';
import {Employee } from '../Employee';
import { Subscription } from 'rxjs';

import { TravelPortalService } from '../travel-portal.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  submitted = false;

  employeeModel = new Employee("","","","","","","","","","","","","passward");

   
  constructor(private travelPortalService : TravelPortalService) { }

  ngOnInit(): void {
  }
  onSubmit() { 
    this.submitted = true 
    console.log(this.employeeModel);
    this.travelPortalService.registerEmployee(this.employeeModel)
    .subscribe(
              data=> console.log("success",data),
              error => console.error('erroe',error)
              
    )
  }

}
