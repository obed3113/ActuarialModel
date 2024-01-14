import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private resultsDataSubject = new Subject<any>();
  resultsData$ = this.resultsDataSubject.asObservable();
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  setResultsData(data: any) {
    this.resultsDataSubject.next(data);
    this.loadingSubject.next(false);
  }

  startLoading() {
    this.loadingSubject.next(true);
  }
}