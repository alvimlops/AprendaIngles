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

  public rodada:number = 0
  public rodadaFrase: Frase | undefined

  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
    console.log (this.rodadaFrase)
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void{
  this.resposta = ((<HTMLInputElement>resposta.target).value)
  //console.log(this.resposta)
  }

  public VerificarResposta(): void {

    if(this.rodadaFrase?.frasePtBr == this.resposta){
      alert('A tradução esta correta')

      this.rodada++


      this.rodadaFrase = this.frases[this.rodada]

    }else{
      alert('a tradução esta errada')
    }

  }

}
