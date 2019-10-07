import { Injectable } from '@angular/core';
import { CalculadoraModule } from '../calculadora.module';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  // Definindo operações com constantes
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  // Método>Parametros>TipoDeRetorno
  calcular(num1: number, num2: number, op: string): number {
    let resultado: number;

    switch (op) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
        break;
    }
    return 0;
  }
  constructor() { }
}
