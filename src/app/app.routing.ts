import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cursos', component: CursosComponent },
];

export const routing: ModuleWithProviders<RouterModule> =
  RouterModule.forRoot(APP_ROUTES);
