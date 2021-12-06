import { Component, OnInit } from '@angular/core';
import { LaundryService } from '../../service/laundry/laundry.service';
import { NgForm } from '@angular/forms';
import { LocalStorageService } from '../../service/localStorage/localStorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  allLaundrys: any = [];

  onSubmit(f: NgForm) {
    const { email, laundry } = f.value;
    const userInfo = this.localStorage.get('loggedUser');

    const userNewInfor = {
      ...userInfo,
      email,
      laundry,
    };
    this.localStorage.set('loggedUser', userNewInfor);
    return this.router.navigate(['/']);
  }

  constructor(
    private localStorage: LocalStorageService,
    private laundryService: LaundryService,
    private router: Router
  ) {
    this.allLaundrys = this.laundryService.getAllWashLaundrys();
  }

  ngOnInit(): void {}
}
