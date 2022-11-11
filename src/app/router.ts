import { AnalisadorLexicoComponent } from './analisador-lexico/analisador-lexico.component';
import { Routes } from "@angular/router";
import { MaquinaDocesComponent } from './maquina-doces/maquina-doces.component';
import { ElevadorComponent } from './elevador/elevador.component';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  {
    path: "home",
    component: AppComponent
  },
  {
    path: "elevador",
    component: ElevadorComponent
  },
  {
    path: "maquina",
    component: MaquinaDocesComponent
  },
  {
    path: "analisador-lexico",
    component: AnalisadorLexicoComponent
  }
];
