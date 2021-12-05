import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../service/schedule/schedule.service';
import { LaundryService } from '../../service/laundry/laundry.service';
import { NgForm, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  isWashMachineAvaliable: boolean;

  avaliableWashMachine: any = [];

  avaliableHours: any = [];

  avaliableInterval: any = [
    {
      id: '001',
      value: '00',
    },
    {
      id: '002',
      value: '30',
    },
  ];

  onSelectPeriod(f: NgForm) {
    const { dateSchedule, hour, interval } = f.value;
    const payload = {
      dateSchedule,
      hour,
      interval,
    };
    this.avaliableWashMachine =
      this.laundryService.getAvaliableMachinesByPeriod(payload);
    this.isWashMachineAvaliable =
      this.avaliableWashMachine.length > 0 ? true : false;
  }

  onSubmit(f: NgForm) {
    const { dateSchedule, hour, interval, machine } = f.value;
    if (dateSchedule && hour && interval && machine) {
      console.log(dateSchedule, hour, ':', interval, machine);
    }
  }

  constructor(
    private scheduleService: ScheduleService,
    private laundryService: LaundryService
  ) {
    this.isWashMachineAvaliable = false;
    this.avaliableHours = this.scheduleService.getAvaliableHours();
  }

  ngOnInit(): void {}
}
