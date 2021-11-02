## Execução do projeto

1 - Abrir o terminal na pasta estudo-angular-a;

2 - Executar o compando __docker-compose up -d__;

O comando irá:
- criar um container para execução;
- instalar as dependências;
- realizar o build da aplicação;
- criar um projeto nginx com o build do passo anterior;
- expor a porta 80 para acessar a aplicação via navegador.

## Exportação de módulos

É possível exportar um módulo inteiro através de um arquivo typescript com a seguinte linha de código:
__export * from './diretório/do/módulo';__

Dentro do arquivo **app.modulo.ts** basta importar o módulo pelo caminho do arquivo criado no passo anterior.

