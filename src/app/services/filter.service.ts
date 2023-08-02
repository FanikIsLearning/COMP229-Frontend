import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  filterChange: Subject<string> = new Subject<string>();

  constructor() {}

  filterProductByCategory(category: string): void {
    this.filterChange.next(category);
  }
}
