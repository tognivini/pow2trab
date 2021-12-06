import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localStorage/localStorage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  startLogin(payload: any) {
    //função de login
    console.log(payload);
    const user = {
      name: 'robson',
      email: 'robson@gmail.com',
      studantCode: '0000000000',
      token: 'abskjf30lp',
    };
    this.localStorage.set('loggedUser', user);
    return this.router.navigate(['/']);
  }
  constructor(
    private router: Router,
    private localStorage: LocalStorageService
  ) {}
}
