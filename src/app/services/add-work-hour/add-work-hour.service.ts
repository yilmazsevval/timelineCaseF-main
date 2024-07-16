import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddWorkHourService {

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  addWorkHour(workHourData: any): Observable<any> {
    return this.httpClient.post<any>(`/workhours/create`, workHourData, this.httpOptions);
  }
}
