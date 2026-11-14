import { Component, input } from '@angular/core';
import { Proyecto } from '../datos';

@Component({
  selector: 'app-proyecto-card',
  templateUrl: './proyecto-card.html',
  styleUrl: './proyecto-card.css',
})
export class ProyectoCard {
  proyecto = input.required<Proyecto>();
}