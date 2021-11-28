import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosService } from '../../service/cursos/cursos.service';

@NgModule({
  declarations: [CursosComponent],
  imports: [CommonModule],
  exports: [],
  providers: [CursosService],
})
export class CursosModule {}
