import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from './Employee';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TravelPortalService {

  private baseUrl = 'http://localhost:8080/1/All-tickets'
  constructor(private http : HttpClient) { }

  registerEmployee(employee : Employee)
  {
    return this.http.get<any>(this.baseUrl)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error : HttpErrorResponse)
  {
    return throwError(error)
  }
}
