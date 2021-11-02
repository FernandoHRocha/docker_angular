# Estudos de angular e docker

Neste projeto, para subir o projeto angular em um container do docker, é utilizada a composição de containers por meio do docker-compose.

Nota-se a presença de um arquivo docker-compose.yml para a composição do nosso container, e o arquivo Dockerfile, necessário para instruir a criação das imagens a serem criadas a partir do projeto angular utilizando uma imagem do nodejs e do iginx.

## Execução do projeto

1 - Abrir o terminal na pasta estudo-angular-a;

2 - Executar o compando __docker-compose up -d__;

O comando irá:
- criar um container para execução;
- instalar as dependências;
- realizar o build da aplicação;
- criar um projeto nginx com o build do passo anterior;
- expor a porta 80 para acessar a aplicação via navegador.

# Angular

## Criações
A criação de elementos dentro do angular acontece por comandos no terminal.

__ng generate elemento__

Podendo ainda utilizar o comando resumido.

__ng g elemento__

### Componentes
__ng generate component diretorio/do/componente__

__ng g c diretorio/do/componente__

### Services
__ng g services diretorio/do/componente__

__ng g s__

## Exportação de módulos

É possível exportar um módulo inteiro através de um arquivo typescript com a seguinte linha de código:
__export * from './diretório/do/módulo';__

Dentro do arquivo **app.modulo.ts** basta importar o módulo pelo caminho do arquivo criado no passo anterior.

## Ciclo de vida das instancias dos componentes

Os componentes do angular são instanciados e possuem um ciclo de vida, desde o seu inicio quando ocorre o evento ngOnInit até o ngOnDestroy.

Documentação a cerca do [ciclo de vida de uma instancia de um componente](https://angular.io/guide/lifecycle-hooks)

### ngOnInit()

implementação e método obrigatório:

__implements OnInit__
__ngOnInit()__

A classe possui o método construtor para a criação da instancia.
O método ngOnInit é chamado assim que a instancia do componente é criada, a utilização deste método contra o método construtor é recomendada em casos onde a inicialização do componente necessita de alguma operação de maior custo, possibilitando assim, que o componente seja instanciado sem problemas e posteriormente execute a ação contida em ngOnInit().

### ngOnChanges()

### ngDoCheck()

## Vínculos dentro do componente

A comunicação dentro do angular acontece baseada no estado da aplicação, de modo que os vinculos estarão sendo atualizados a cada nova interação realizada.

### One Way Data Binding - Vínculo de uma direção

É possível utilizar uma expressão proveniente do typescript do componente dentro do html. Para tal, utilizamos uma das seguintes sintaxes:
```
[valor]="expressão"

{{expressão}}

vinculo-alvo="expressão"
```
[Sintaxe de Vinculos](https://angular.io/guide/binding-syntax)

### Event Biding - Vínculo de Evento

Chamadas a eventos podem ser realizadas diretamente dentro do html do componente.
```
(click)="event"
```
[Vínculo de Evento](https://angular.io/guide/event-binding)

## Testes

Os arquivos .spec.ts possuem o objetivo de testar os códigos.
Todos os testes são declarados dentro do arquivo mencionado, e são feitos pela função __it__ proveniente do [Jasmine](https://jasmine.github.io/index.html), uma biblioteca javascript direcionada a realização de testes com suporte a BDD (Behaviour Driven Development) e utilizado com TDD (Test Driven Development).

### JASMINE

Como exemplo testar uma função de soma.
```typescript
describe('Calculadora',() ={
    it('deve garantir que 1+4=5',
        inject([Calculadora], (service: Calculadora) => {
            let soma = service.somar(1,4);
            expect(soma).toEqual(5);
        }
        ))
)}
```

describe(string, function): escopo do teste

it(string, function): nome do teste

expect(actual): chamada do evento/function a ser testado

### Expect

expect(array).toContain(member);
expect(fn).toThrow(string);
expect(fn).toThrowError(string);
expect(instance).toBe(instance);
expect(mixed).toBeDefined();
expect(mixed).toBeFalsy();
expect(mixed).toBeNull();
expect(mixed).toBeTruthy();
expect(mixed).toBeUndefined();
expect(mixed).toEqual(mixed);
expect(mixed).toMatch(pattern);
expect(number).toBeCloseTo(number, decimalPlaces);
expect(number).toBeGreaterThan(number);
expect(number).toBeLessThan(number);
expect(number).toBeNaN();
expect(spy).toHaveBeenCalled();
expect(spy).toHaveBeenCalledTimes(number);
expect(spy).toHaveBeenCalledWith(...arguments);