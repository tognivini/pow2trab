import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../service/schedule/schedule.service';
import { LaundryService } from '../../service/laundry/laundry.service';
import { LocalStorageService } from '../../service/localStorage/localStorage.service';
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  hadNotUserCompletedRegister: boolean;

  isWashMachineAvaliable: boolean;

  avaliableWashMachine: any = [];

  avaliableHours: any = [];

  loggedUser: any = {};

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

  onRedirectUserPage() {
    return this.router.navigate(['/user']);
  }

  onGetLoggedUser() {
    if (this.loggedUser?.laundry) {
      this.hadNotUserCompletedRegister = false;
    }
  }

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
    private localStorage: LocalStorageService,
    private scheduleService: ScheduleService,
    private laundryService: LaundryService,
    private router: Router
  ) {
    this.isWashMachineAvaliable = false;
    this.avaliableHours = this.scheduleService.getAvaliableHours();
    this.hadNotUserCompletedRegister = true;
    this.loggedUser = this.localStorage.get('loggedUser');
    this.onGetLoggedUser();
  }

  ngOnInit(): void {}
}
