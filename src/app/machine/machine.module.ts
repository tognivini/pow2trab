import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineComponent } from './machine.component';
import { MachineService } from '../service/machine/machine.service';

@NgModule({
  declarations: [MachineComponent],
  imports: [CommonModule],
  exports: [],
  providers: [MachineService],
})
export class MachineModule {}
