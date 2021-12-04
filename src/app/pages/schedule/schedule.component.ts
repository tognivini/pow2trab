import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login/login.service';
import { NgForm, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  states = [
    { name: 'Arizona', abbrev: 'AZ' },
    { name: 'California', abbrev: 'CA' },
    { name: 'Colorado', abbrev: 'CO' },
    { name: 'New York', abbrev: 'NY' },
    { name: 'Pennsylvania', abbrev: 'PA' },
  ];

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
    const { dateSchedule, hourSchedule, state } = f.value;
    // if (this.isRegisterPage) {
    //   if (email && studantCode && password) {
    //     if (password === rePassword) {
    //       this.errorRePassowrd = '';
    //       alert('action register');
    //     } else {
    //       this.errorRePassowrd = 'senhas não coincidem';
    //     }
    //   }
    // } else {
    //   this.loginService.startLogin({
    //     email,
    //     studantCode,
    //     password,
    //   });
    // }
    console.log(dateSchedule, hourSchedule, 'a', state);
  }
  // form = new FormGroup({
  //   state: new FormControl(this.states[3]),
  // });

  constructor(private loginService: LoginService) {
    // this.avaliableWashMachine = this.scheduleService.getAvaliableWashMachine();
    // this.avaliableHours = this.scheduleService.getAvaliableHours();
  }

  ngOnInit(): void {}
}
