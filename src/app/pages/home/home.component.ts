import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from '../../service/localStorage/localStorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  hadNotUserCompletedRegister: boolean;

  loggedUser: any = {};

  scheduleHistory: any = [
    {
      id: '003',
      time: '11:00',
      date: '10/12/2021',
      status: 'Pendente',
    },
    {
      id: '002',
      time: '10:00',
      date: '20/10/2021',
      status: 'Finalizado',
    },
    {
      id: '001',
      time: '11:00',
      date: '18/10/2021',
      status: 'Finalizado',
    },
  ];

  onGetLoggedUser() {
    if (!this.loggedUser?.laundry?.id) {
      this.hadNotUserCompletedRegister = false;
    }
  }

  onRedirectPage() {
    return this.router.navigate(['/schedule']);
  }

  onRedirectUserPage() {
    return this.router.navigate(['/user']);
  }

  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {
    this.hadNotUserCompletedRegister = true;
    this.loggedUser = this.localStorage.get('loggedUser');
  }

  ngOnInit(): void {}
}
