import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserService } from '../service/user/user.service';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule],
  exports: [],
  providers: [UserService],
})
export class UserModule {}
