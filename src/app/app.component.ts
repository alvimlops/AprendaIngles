import { Component } from '@angular/core';

//executamos a função, a component, passando os metadados
//como o selector atraves de um objeto javascrip e na sequencia
//nos definimos a classe a baixo que recebe esses metadados
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//classe
//O objetivo de uma classe e gerenciar o template
//controlar toda a logica
export class AppComponent {

  public encerrarJogo (tipo: string) : void {
    console.log(tipo);
  }

}
