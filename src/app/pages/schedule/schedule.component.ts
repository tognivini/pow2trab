import { Component, OnInit } from '@angular/core';
// import { LoginService } from '../../service/login/login.service';
import { NgForm } from '@angular/forms';
import { ScheduleService } from '../../service/schedule/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
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

  onSubmit(f: NgForm) {
    // console.log(f.value);
  }

  constructor(private scheduleService: ScheduleService) {
    this.avaliableWashMachine = this.scheduleService.getAvaliableWashMachine();
    this.avaliableHours = this.scheduleService.getAvaliableHours();
  }

  ngOnInit(): void {}
}
