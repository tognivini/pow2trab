import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component1Component } from './component1/component1.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    CursosComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, routing],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
