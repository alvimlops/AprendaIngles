import { Frase } from './../shared/frase.model';
import { Component, OnInit, Output } from '@angular/core';
import { FRASES } from './frase-mock';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFraseEng!: Frase;

  public progresso:number = 0

  public tentativas: number = 3
  rodadaFrase: any;


  constructor() {
    this.atualizaRodada()
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void{
  this.resposta = ((<HTMLInputElement>resposta.target).value)
  //console.log(this.resposta)
  }

  public VerificarResposta(): void {

    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert('A tradução esta correta')

      //trocar pergunta da rodada
      this.rodada++

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      console.log(this.progresso)

      //atualizar o objeto rodadaFrase
      this.atualizaRodada()


    }else{
      this.tentativas--

      if(this.tentativas === -1){
        alert('voce perdeu todas as tentativas')
      }
    }

  }
  public atualizaRodada(): void{
    //define a frase da rodada com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada]
    //limpar a resposta
    this.resposta = ''
  }

}
