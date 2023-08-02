// search.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchSubject = new ReplaySubject<string>(1);

  searchObservable = this.searchSubject.asObservable();

  constructor() {}

  setSearchTerm(name: string): void {
    this.searchSubject.next(name);
  }
}
