import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// O componente sempre começa sendo definindo como uma classe
export class AppComponent {
  description = 'Este é um atributo da classe AppComponent sendo renderizado através do operador {{nm_atributo}}';
}
