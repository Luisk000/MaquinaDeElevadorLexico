import { Component, OnInit } from '@angular/core';
import { moveState } from '../animations';

@Component({
  selector: 'app-elevador',
  templateUrl: './elevador.component.html',
  styleUrls: ['./elevador.component.css'],
  animations: [
    moveState
  ]
})
export class ElevadorComponent implements OnInit {

  ngOnInit(): void {
  }

  lockAll = false;
  movement = 0;
  timing = 0;
  andarAtual = 1;
  state = 'static';
  elevadorAbertoPath = "../assets/aberto.jpeg";
  elevadorFechadoPath = "../assets/fechado.jpeg";

  mover(destino: number) {
    this.lockAll = true;
    this.timing = 0;
    if (destino > this.andarAtual) {
      var i = destino - this.andarAtual;
      while (i > 0) {
        this.movement = this.movement - 151;
        this.timing = this.timing + 500;
        i--;
      }

    }
    else if (destino < this.andarAtual) {
      var i = this.andarAtual - destino;
      while (i > 0) {
        this.movement = this.movement + 151;
        this.timing = this.timing + 500;
        i--;
      }

    }

    setTimeout(() => {
      this.elevadorAbertoPath = "../assets/abrindo.jpeg";
    }, 100)

    setTimeout(() => {
      this.andarAtual = 0;
    }, 200)

      if (this.state == 'move')
        this.state = 'moveAgain'
      else
        this.state = 'move'



    setTimeout(() => {
      this.andarAtual = destino;
    }, this.timing + 400)

    setTimeout(() => {
      this.elevadorAbertoPath = "../assets/aberto.jpeg";
      this.lockAll = false;
    }, this.timing + 500)

  }

}
