import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaundryComponent } from './laundry.component';
import { LaundryService } from '../service/laundry/laundry.service';

@NgModule({
  declarations: [LaundryComponent],
  imports: [CommonModule],
  exports: [],
  providers: [LaundryService],
})
export class LaundryModule {}
