import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElevadorComponent } from './elevador/elevador.component';
import { MaquinaDocesComponent } from './maquina-doces/maquina-doces.component';
import { AnalisadorLexicoComponent } from './analisador-lexico/analisador-lexico.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ElevadorComponent,
    MaquinaDocesComponent,
    AnalisadorLexicoComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
