import { Component, OnInit } from '@angular/core';
import { TravelPortalService } from '../travel-portal.service';

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css']
})
export class EntryPageComponent implements OnInit {

  public show_employee_form : boolean = false
  // constructor(private _travelportalservice : TravelPortalService) { }

  ngOnInit(): void {

    //this.show_employee_form = this._travelportalservice.getVariableForShowEmployeeLogin();
  }

  // showEmployeeLogin()
  // {
  // this.show_employee_form = !this.show_employee_form
  // }
}
