import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isRegisterPage: boolean;
  stringg: string;

  errorRePassowrd: string;

  onFlipPage() {
    this.isRegisterPage = !this.isRegisterPage;
  }

  onSubmit(f: NgForm) {
    if (this.isRegisterPage) {
      const { password, rePassword } = f.value;
      if (password === rePassword) {
        console.log('action register');
        this.errorRePassowrd = '';
      } else {
        this.errorRePassowrd = 'senhas não coincidem';
        // this.errorFields = {
        //   ...this.errorFields,
        //   rePassword: 'Senhas não coincidem',
        // };
      }
    } else {
      console.log('action login');
    }
    console.log(f.value);
  }

  constructor() {
    this.isRegisterPage = false;
    this.stringg = 'alo';
    this.errorRePassowrd = '';
    // this.errorFields = {
    //   rePassword: false,
    // };
  }

  ngOnInit(): void {}
}
