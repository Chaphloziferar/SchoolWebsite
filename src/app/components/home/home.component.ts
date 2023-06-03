import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  noticias = [
    {
      titulo: 'Nueva clase de matemáticas',
      contenido: 'Se abrirá una nueva clase de matemáticas para los estudiantes de secundaria.',
      fecha: new Date('2023-05-20'),
      autor: 'Administración'
    },
    {
      titulo: 'Visita al museo de ciencias',
      contenido: 'Los estudiantes de primaria realizarán una visita educativa al museo de ciencias.',
      fecha: new Date('2023-05-15'),
      autor: 'Administración'
    },
    {
      titulo: 'Concurso de escritura',
      contenido: 'Se anuncia el concurso de escritura creativa para todos los estudiantes de la escuela.',
      fecha: new Date('2023-05-10'),
      autor: 'Administración'
    }
  ];
  
}
