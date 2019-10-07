import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

// OnInit é a implementação de uma interface
export class CalculadoraComponent implements OnInit {

  // Cria o objeto o mais rápido (não inicialize tarefas pesadas aqui, apenas dependencias)
  constructor(private CalculadoraService: CalculadoraService) {
    // Dependencias instanciadas dentro do construtor se tornam um objeto que pode ser acessado
    // na Interface com o método "this" ex: this.CalculadoraService
   }

  // Evento chamado após o objeto ser instanciado, aqui tarefas mais pesadas podem ser iniciadas
  // este método é Obrigatório ao implementar uma interface
  ngOnInit() {
  }

}
