# KUKAC TEST
Um teste de programação que consiste na criação de uma API com algumas funcionalidades e a implementação de um front-end para consumir os recursos da API.

# Rodando a aplicação

** Para iniciar a aplicação é necessário ter instalado o <a href="https://nodejs.org/en/download/">NodeJs</a> e o compilador TypeScript na sua máquina.

Em uma pasta de sua escolha, clone a aplicação e aguarde até que os arquivos sejam importados.

```
git clone https://github.com/devnilo/kukac
```
Para rodar a API, acesse a pasta raiz do projeto e, dentro da pasta "server", execute o seguinte comando para instalar as dependências:
```
...\kukac\src> npm i
```
Feito isso, dentro da mesma pasta, execute o comando para compilar os arquivos e gerar a pasta ./build:
```
...\kukac\src> tsc
```
Agora, basta executar o comando <b>start</b> para iniciar a aplicação:
```
...\kukac\src> npm start
```

# Kukac Test CLT

## Especificações
A cool playground.


Olá pessoa, abaixo temos um divertido, empolgante e pequeno desafio de programação. O que poderia dar mais prazer a um programador não!?

Bom o nosso desafio é o seguinte:

Precisamos que seja construído uma aplicação WEB. É importante que o frontend e o backend sejam completamente separados um do outro, e que todo processamento de dados seja feito no backend.

### Sobre nosso belo Front
O layout será o que o seu coração mandar, um bom uso de UI/UX serão muito bem avaliados como diferenciais. 
Se você quiser utilizar Angular 7^ será bem legal, mas não obrigatório.


### Sobre o nosso inteligente Back
Ele deve, obrigatoriamente, ser construído com Node.js.
Deve ser utilizado Testes Unitários.


### O nosso desafio

Existem 3 problemas que precisamos de uma solução, que são:

    1- Números palíndromos são aqueles que escritos da direita para esquerda ou da esquerda para direita tem o mesmo valor. Exemplo:929, 44, 97379. 
Fazer um algoritmo que imprima todos os números palíndromos entre um intervalo que será escolhido pelo usuário da aplicação.

    2- Suponha que um caixa disponha apenas de notas de 1, 10 e 100 reais. Considerando que alguém está pagando uma compra, escreva um algoritmo que mostre o número mínimo de notas que o caixa deve fornecer como troco. 
Mostre também: o valor da compra, o valor do troco e a quantidade de cada tipo de nota do troco. Suponha que o sistema monetário não utilize moedas.
O valor da compra e o valor de dinheiro entregue ao caixa deve ser informado pelo usuário.

    3- Precisamos controlar melhor os dados de alguns veículos que ficam na nossa garagem e para isso precisamos que seja feito o seguinte:
    a) Crie a interface “Veiculo” com os seguintes atributos:
– Modelo
– Ano de fabricação
– Quantidade de Portas
– Marca
– Texto {JSON com os dados do veículo }

    b) Crie a classe “Passeio”, que herda de Veículo e tem os seguintes atributos:
– Sempre 4 portas

    c) Crie a classe “Moto” com os seguintes atributos:
– Duas rodas
– Passageiros entre 1 e 2

Deve ser solicitado ao usuário que preencha as informações sobre o seu veículo, os dados devem ser salvos em um arquivo JSON (para não precisar trabalhar com banco de dados, até porquê já vai ser bem próximo de um banco NoSQL);

    4- Deve ser informado pelo usuário 5 CEP’s, a aplicação deve consumir a api VIACep (https://viacep.com.br/) e obtiver dados sobre esses CEP’s. 
Os CEP’s informados pelo usuário devem ser inicialmente armazenados em um array, e o consumo da API deve ser de forma síncrona (aguardar a resposta do primeiro para iniciar a requisição do segundo e assim por diante).
Os dados após o processamento devem ser exibidos na tela.

### Observações sobre o desenvolvimento da aplicação:

As questões 1, 2 e 4 podem estar em JavaScript ou TypeScript.
A questão 3 precisa estar em TypeScript.


### A tão esperada entrega

A sua aplicação deve estar no git, e como entrega queremos apenas o link para podermos clonar a mesma. 
