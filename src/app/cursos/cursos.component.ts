import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../app/service/cursos/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  nameText: string;

  cursos: string[];

  constructor(private cursosService: CursosService) {
    // constructor() {
    this.nameText = 'ola test construct';
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {}
}
