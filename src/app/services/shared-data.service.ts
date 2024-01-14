import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private resultsDataSubject = new Subject<any>();
  resultsData$ = this.resultsDataSubject.asObservable();

  setResultsData(data: any) {
    this.resultsDataSubject.next(data);
  }
}