import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 2+4=6',
    inject([CalculadoraService], (service: CalculadoraService) => {
      expect(service.calcular(2,4, CalculadoraService.ADICAO)).toEqual(6);
  }));

  it('deve garantir que 2-4=-2',
    inject([CalculadoraService], (service: CalculadoraService) =>{
      expect(service.calcular(2,4, CalculadoraService.SUBTRACAO)).toEqual(-2)
  }));

  it('deve garantir que 2/4=0.5',
    inject([CalculadoraService], (service: CalculadoraService) =>{
      expect(service.calcular(2,4, CalculadoraService.DIVISAO)).toEqual(0.5)
  }));

  it('deve garantir que 2*4=8',
    inject([CalculadoraService], (service: CalculadoraService) =>{
      expect(service.calcular(2,4, CalculadoraService.MULTIPLICACAO)).toEqual(8)
  }));

  it('deve retornar 0 para operação inválida',
    inject([CalculadoraService], (service: CalculadoraService) => {
      expect(service.calcular(2,4,'%')).toEqual(0)
    }))
});
