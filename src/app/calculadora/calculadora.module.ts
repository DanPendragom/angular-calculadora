import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';
import { CalculadoraService } from './services';
@NgModule({
  declarations: [CalculadoraComponent],
  imports: [
    CommonModule
  ],

  // Torna o módulo calculadora e seus componentes visivel para os demais módulos
  exports: [
    CalculadoraComponent
  ],
  // Registra um serviço 
  providers: [
    CalculadoraService
  ]
})

export class CalculadoraModule { }
