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
    },
    {
      "titulo": "Excursión al zoológico",
      "contenido": "Los estudiantes de tercer grado disfrutarán de una emocionante excursión al zoológico local para aprender sobre la diversidad de animales.",
      "fecha": "2023-06-02",
      "autor": "Departamento de Ciencias Naturales"
    },
    {
      "titulo": "Taller de arte para adolescentes",
      "contenido": "Se organizará un taller de arte gratuito para adolescentes interesados en desarrollar sus habilidades artísticas. No se requiere experiencia previa.",
      "fecha": "2023-06-10",
      "autor": "Departamento de Arte"
    },
    {
      "titulo": "Charla sobre orientación vocacional",
      "contenido": "Se llevará a cabo una charla informativa para los estudiantes de último año de secundaria, donde se discutirán diferentes opciones y carreras profesionales.",
      "fecha": "2023-06-15",
      "autor": "Departamento de Orientación"
    },
    {
      "titulo": "Reunión de padres y maestros",
      "contenido": "Se convoca a una reunión de padres y maestros para discutir el progreso académico de los estudiantes y establecer metas para el próximo trimestre.",
      "fecha": "2023-06-20",
      "autor": "Dirección de la Escuela"
    }
  ];
  
}
