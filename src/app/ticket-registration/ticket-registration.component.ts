import { Component, OnInit } from '@angular/core';
import { Ticket } from '../Ticket';

@Component({
  selector: 'app-ticket-registration',
  templateUrl: './ticket-registration.component.html',
  styleUrls: ['./ticket-registration.component.css']
})
export class TicketRegistrationComponent implements OnInit {

  priorities = ["Immediate","Urgent","Normal"]

  ticketModel = new Ticket("",1,"","", null, null ,"","","","","","","")
  onSubmit()
  {
    console.log(this.ticketModel);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
