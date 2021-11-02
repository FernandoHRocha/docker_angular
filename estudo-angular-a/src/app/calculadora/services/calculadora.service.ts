/**
 * Projeto de calculadora em angular e docker.
 * 
 * @author Fernando H. Rocha<fhrlobacz@gmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly ADICAO: string = '+'
  static readonly SUBTRACAO: string = '-'
  static readonly MULTIPLICACAO: string = '*'
  static readonly DIVISAO: string = '/'

  constructor() { }

  /**
   * Método que calcula uma operação matemática entre dois números.
   * @param num1 number
   * @param num2 number
   * @param operacao string Operação a ser executada
   * @returns number Resultado da operação
   */

  calcular(num1: number, num2: number, operacao: string): number{
    let resultado: number;

    switch(operacao) {
      case CalculadoraService.ADICAO:
        resultado = num1 + num2
        break;
        case CalculadoraService.SUBTRACAO:
          resultado = num1 - num2
        break;
        case CalculadoraService.DIVISAO:
          resultado = num1 / num2
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2
        break;
      default:
        resultado = 0                  
    }
    return resultado
  }

}
