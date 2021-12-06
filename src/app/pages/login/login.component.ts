import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isRegisterPage: boolean;
  errorRePassowrd: string;

  onFlipPage() {
    this.isRegisterPage = !this.isRegisterPage;
  }

  onSubmit(f: NgForm) {
    const { email, studantCode, password, rePassword } = f.value;
    if (this.isRegisterPage) {
      if (email && studantCode && password) {
        if (password === rePassword) {
          this.errorRePassowrd = '';
          alert('action register');
        } else {
          this.errorRePassowrd = 'senhas não coincidem';
        }
      }
    } else {
      this.loginService.startLogin({
        email,
        studantCode,
        password,
      });
    }
  }

  constructor(private loginService: LoginService) {
    this.isRegisterPage = false;
    this.errorRePassowrd = '';
    // this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {}
}
