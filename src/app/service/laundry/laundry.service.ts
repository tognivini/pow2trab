import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class LaundryService {
  getAvaliableMachinesByPeriod(payload: any) {
    const { dateSchedule, hour, interval } = payload;
    const selectedDate: moment.Moment = moment(dateSchedule);
    const today = moment();
    const diffDays = selectedDate.diff(today, 'days');
    if (diffDays > 0 && hour === '10' && interval === '00') {
      return [
        {
          id: '001',
          value: '02',
        },
        {
          id: '002',
          value: '03',
        },
      ];
    } else {
      return [];
    }
  }
  constructor() {}
}
