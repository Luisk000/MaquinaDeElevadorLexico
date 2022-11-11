import { AnalisadorLexicoService } from './analisador-lexico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analisador-lexico',
  templateUrl: './analisador-lexico.component.html',
  styleUrls: ['./analisador-lexico.component.css']
})
export class AnalisadorLexicoComponent implements OnInit {

  entrada = "";
  saida = "";

  constructor(private analisadorService: AnalisadorLexicoService) { }

  ngOnInit() {
  }

  confirmar(){
    this.analisadorService.analisar(this.entrada)
      .subscribe((retorno: string) => this.saida = retorno);
  }

  limpar(){
    this.entrada = "";
    this.saida= "";
  }

}
