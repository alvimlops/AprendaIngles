import { Frase } from './../shared/frase.model';
import { Component, OnInit } from '@angular/core';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public Instrucao: string = 'Traduza a frase:'
  public resposta: string | undefined

  constructor() { console.log (this.frases)}

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void{
  this.resposta = ((<HTMLInputElement>resposta.target).value)
  console.log(this.resposta)
  }

}
