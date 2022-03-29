O nosso desafio

Existem 4 problemas que precisamos de uma solução, que são:

1- Números palíndromos são aqueles que escritos da direita para esquerda ou da esquerda para
direita tem o mesmo valor. Exemplo: 929, 44, 97379.

Fazer um algoritmo que imprima todos os números palíndromos entre um intervalo que será
escolhido pelo usuário da aplicação.

2- Suponha que um caixa disponha apenas de notas de 1, 10 e 100 reais. Considerando que
alguém está pagando uma compra, escreva um algoritmo que mostre o número mínimo de
notas que o caixa deve fornecer como troco.

Mostre também: o valor da compra, o valor do troco e a quantidade de cada tipo de nota do
troco. Suponha que o sistema monetário não utilize moedas.

O valor da compra e o valor de dinheiro entregue ao caixa deve ser informado pelo usuário.

3- Precisamos controlar melhor os dados de alguns veículos que ficam na nossa garagem e para
isso precisamos que seja feito o seguinte:

a) Crie a interface “Veiculo” com os seguintes atributos:
– Modelo
– Ano de fabricação
– Quantidade de Portas
– Marca

b) Crie a classe “Carro”, que herda de Veículo e tem os seguintes atributos:
– Quantidade de Portas: entre 2 e 4

c) Crie a classe “Moto”, que herda de Veículo, e possui os seguintes atributos:
– Rodas: 2
– Passageiros: entre 1 e 2

Deve ser solicitado ao usuário que preencha as informações sobre o seu veículo, os dados devem ser
salvos em um arquivo JSON (para não precisar trabalhar com banco de dados, até porquê já vai ser
bem próximo de um banco NoSQL);

4- Deve ser informado pelo usuário 5 CEP’s, a aplicação deve consumir a api VIACep
(https://viacep.com.br/) e obtiver dados sobre esses CEP’s.
Os CEP’s informados pelo usuário devem ser inicialmente armazenados em um array, e o
consumo da API deve ser de forma síncrona (aguardar a resposta do primeiro para iniciar a
requisição do segundo e assim por diante).
Os dados após o processamento devem ser exibidos na tela.

Observações sobre o desenvolvimento da aplicação:
As questões 1, 2 e 4 podem estar em JavaScript ou TypeScript.
A questão 3 precisa estar em TypeScript.