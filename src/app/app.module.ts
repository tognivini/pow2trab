import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component1Component } from './component1/component1.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { HomeComponent } from './pages/home/home.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { UserComponent } from './pages/user/user.component';
import { LaundryComponent } from './pages/laundry/laundry.component';
import { MachineComponent } from './pages/machine/machine.component';
import { LoginComponent } from './pages/login/login.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    CursosComponent,
    HomeComponent,
    ScheduleComponent,
    UserComponent,
    LaundryComponent,
    MachineComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, routing, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
