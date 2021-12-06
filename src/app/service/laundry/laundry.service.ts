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

  getAllWashLaundrys() {
    return [
      {
        id: '001',
        name: 'Lavanderia edifício 01',
      },
      {
        id: '002',
        name: 'Lavanderia edifício 02',
      },
      {
        id: '003',
        name: 'Lavanderia edifício 03',
      },
      {
        id: '004',
        name: 'Lavanderia edifício 04',
      },
    ];
  }
  constructor() {}
}
