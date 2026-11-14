import { Component } from '@angular/core';
import { Perfil } from './perfil/perfil';
import { Catalogo } from './catalogo/catalogo';

@Component({
  selector: 'app-root',
  imports: [Perfil, Catalogo],
  templateUrl: './app.html',
})
export class App {}