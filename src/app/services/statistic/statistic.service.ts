import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getTotalWorkHour(): Observable<{ totalWorkHour: string }> {
    return this.httpClient.get<{ totalWorkHour: string }>(`/workhours/totalworkhour`);
  }
}
