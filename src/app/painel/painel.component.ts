import { Frase } from './../shared/frase.model';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
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

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()


  constructor() {
    this.atualizaRodada()
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('componente painel foi destruido')
  }

  public atualizaResposta(resposta: Event): void{
  this.resposta = ((<HTMLInputElement>resposta.target).value)
  //console.log(this.resposta)
  }

  public VerificarResposta(): void {
    if(this.rodadaFrase.frasePtBr == this.resposta){

      //trocar pergunta da rodada
      this.rodada++

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)


      //
      if(this.rodada === 4){
        this.encerrarJogo.emit('Vitoria')
      }

      //atualizar o objeto rodadaFrase
      this.atualizaRodada()


    }else{
      this.tentativas--

      if(this.tentativas === -1){
        this.encerrarJogo.emit('Derrota')
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
