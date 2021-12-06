import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  [x: string]: any;
  getAvaliableHours() {
    return [
      {
        value: '09',
      },
      {
        value: '10',
      },
      {
        value: '11',
      },
      {
        value: '13',
      },
      {
        value: '14',
      },
      {
        value: '15',
      },
      {
        value: '16',
      },
      {
        value: '17',
      },
    ];
  }

  constructor() {}
}
