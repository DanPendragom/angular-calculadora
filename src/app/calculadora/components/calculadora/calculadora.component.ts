import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

// OnInit é a implementação de uma interface
export class CalculadoraComponent implements OnInit {

  private n1: string;
  private n2: string;
  private resultado: number;
  private operacao: string;

  // Cria o objeto o mais rápido (não inicialize tarefas pesadas aqui, apenas dependencias)
  constructor(private CalculadoraService: CalculadoraService) {
    // Dependencias instanciadas dentro do construtor se tornam um objeto que pode ser acessado
    // na Interface com o método "this" ex: this.CalculadoraService
  }

  // Evento chamado após o objeto ser instanciado, aqui tarefas mais pesadas podem ser iniciadas
  // este método é Obrigatório ao implementar uma interface
  ngOnInit() {
    this.limpar();
  }

  limpar(): void {
    this.n1 = '0';
    this.n2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  // digitar(numero: string): void{
  //   if(this.operacao === null){
  //     this.n1 
  //   }
  // }

  operar(operacao: string): void {

  }

  calcular(): void {

  }

  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }

    if (this.n2 !== null) {
      return this.n2;
    }

    return this.n1;
  }
}
