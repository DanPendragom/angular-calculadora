import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';
@NgModule({
  declarations: [CalculadoraComponent],
  imports: [
    CommonModule
  ],

  // Torna o módulo calculadora e seus componentes visivel para os demais módulos
  exports: [
    CalculadoraComponent
  ]
})

export class CalculadoraModule { }
