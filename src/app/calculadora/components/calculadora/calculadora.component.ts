import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

// OnInit é a implementação de uma interface
export class CalculadoraComponent implements OnInit {

  // Cria o objeto o mais rápido (não inicialize tarefas pesadas aqui)
  constructor() { }

  // Evento chamado após o objeto ser instanciado, aqui tarefas mais pesadas podem ser iniciadas
  // este método é Obrigatório ao implementar uma interface
  ngOnInit() {
  }

}
