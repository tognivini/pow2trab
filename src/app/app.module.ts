import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component1Component } from './component1/component1.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { UserComponent } from './user/user.component';
import { LaundryComponent } from './laundry/laundry.component';
import { MachineComponent } from './machine/machine.component';

import { routing } from './app.routing';

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
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, routing],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
