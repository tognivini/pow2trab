import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { ScheduleService } from '../../service/schedule/schedule.service';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [CommonModule],
  exports: [],
  providers: [ScheduleService],
})
export class ScheduleModule {}
