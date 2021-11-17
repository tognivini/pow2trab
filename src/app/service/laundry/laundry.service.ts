import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LaundryService {
  constructor() {}

  getLaundry() {
    return ['name1', 'name2', 'name3'];
  }
}
