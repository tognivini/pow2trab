import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  getAvaliableWashMachine() {
    return [
      {
        name: 'máquina 1',
        value: '001',
      },
      {
        name: 'máquina 2',
        value: '002',
      },
      {
        name: 'máquina 3',
        value: '003',
      },
    ];
  }

  getAvaliableHours() {
    return [
      {
        id: '001',
        value: '09',
      },
      {
        id: '002',
        value: '10',
      },
      {
        id: '003',
        value: '11',
      },
      {
        id: '003',
        value: '13',
      },
      {
        id: '004',
        value: '14',
      },
      {
        id: '005',
        value: '15',
      },
      {
        id: '006',
        value: '16',
      },
      {
        id: '007',
        value: '17',
      },
    ];
  }

  constructor() {}
}
