import { Component, OnInit } from '@angular/core';
import { fade, fadeLong } from '../animations';

@Component({
  selector: 'app-maquina-doces',
  templateUrl: './maquina-doces.component.html',
  styleUrls: ['./maquina-doces.component.css'],
  animations: [
    fade,
    fadeLong
  ]
})
export class MaquinaDocesComponent {

 
  doceSelecionado = false;
  doceASuficiente = false;
  doceBSuficiente = false;
  doceCSuficiente = false;
  valorLimite = false;
  valor = 0;
  troco = -1;
  imagePath = "../assets/Capturar.png";
  APath = "../assets/A.png";
  BPath = "../assets/B.png";
  CPath = "../assets/C.png";
  doce = "";

  selecionaDinheiro(valor: number){
    this.valor = this.valor + valor;

    if(this.valor >= 6)
      this.doceASuficiente = true;

    if(this.valor >= 7)
      this.doceBSuficiente = true;

    if(this.valor >= 8){
      this.doceCSuficiente = true;
      this.valorLimite = true;
    }
      
  }

  selecionarDoce(doce: string){
    this.doce = doce;
    if (doce === "A")
      this.valor = this.valor - 6;

    else if (doce === "B")
      this.valor = this.valor - 7;

    else if (doce === "C")
      this.valor = this.valor - 8;

    this.troco = this.troco + 1 + this.valor;
    this.valor = 0;
    this.doceASuficiente = false;
    this.doceBSuficiente = false;
    this.doceCSuficiente = false;
    this.valorLimite = false;
  }

  receber(){
    this.troco = -1;
    this.doceASuficiente = false;
    this.doceBSuficiente = false;
    this.doceCSuficiente = false;
    this.doce = "";
  }
}
