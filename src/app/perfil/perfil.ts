import { Component } from '@angular/core';
import { PERFIL } from '../datos';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  perfil = PERFIL;
}