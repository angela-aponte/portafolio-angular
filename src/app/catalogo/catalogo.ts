import { Component } from '@angular/core';
import { ProyectoCard } from '../proyecto-card/proyecto-card';
import { PROYECTOS } from '../datos';

@Component({
  selector: 'app-catalogo',
  imports: [ProyectoCard],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {
  proyectos = PROYECTOS;
}