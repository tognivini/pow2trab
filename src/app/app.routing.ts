import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { LaundryComponent } from './pages/laundry/laundry.component';
import { MachineComponent } from './pages/machine/machine.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { LoginComponent } from './pages/login/login.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'laundry', component: LaundryComponent },
  { path: 'machine', component: MachineComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'login', component: LoginComponent },
];

export const routing: ModuleWithProviders<RouterModule> =
  RouterModule.forRoot(APP_ROUTES);
