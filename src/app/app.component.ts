import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './service/localStorage/local-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pow2trab';

  isLoggedUser: any = {};

  onRedirectLogoff() {
    this.isLoggedUser = {};
    this.localStore.clear();
    this.router.navigate(['/login']);
  }
  onRedirectNav(path: string) {
    if (this.checkUser()) {
      this.router.navigate([path]);
    }
  }
  checkUser() {
    this.isLoggedUser = this.localStore.get('loggedUser');
    // checkToken
    if (!this.isLoggedUser?.token) {
      this.localStore.clear();
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
  constructor(private router: Router, public localStore: LocalStorageService) {
    this.checkUser();
  }
}
