import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora';

@NgModule({
  // Componente que é renderizado pelo módulo
  declarations: [
    AppComponent
  ],
  // Modulos usam outros módulos, aqui eles são importados
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculadoraModule
  ],
  // Serviços
  providers: [],

  // Define o módulo principal, que será executado no carregamento da página
  bootstrap: [AppComponent]
})
export class AppModule { }
