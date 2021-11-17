import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LaundryComponent } from './laundry/laundry.component';
import { MachineComponent } from './machine/machine.component';
import { ScheduleComponent } from './schedule/schedule.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'laundry', component: LaundryComponent },
  { path: 'machine', component: MachineComponent },
  { path: 'schedule', component: ScheduleComponent },
];

export const routing: ModuleWithProviders<RouterModule> =
  RouterModule.forRoot(APP_ROUTES);
