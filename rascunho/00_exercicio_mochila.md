---
icon: dumbbell
date: 2025-07-21 08:00:00.00 -3
tag:
  - java
category:
  - exercicio
order: 0
---

# Exercício: Modelagem de Mochila Escolar

Utilizando os conceitos de Orientação a Objetos (atributos, métodos, construtores e associação), construa um programa em Java com base nas informações abaixo.

Uma mochila escolar é composta por:

- Estojo
  - Exemplo de atributos: cor (String), temCaneta (boolean)
- Garrafa
  - Exemplo de atributos: capacidade (int, em ml), cheia (boolean)
- Caderno
  - Exemplo de atributos: materia (String), folhas (int)
- Lancheira
  - Exemplo de atributos: tipoLanche (String), temSuco (boolean)

Cada um desses componentes deve ser representado por uma classe separada, com pelo menos 2 atributos.

A Mochila pode realizar as seguintes ações:

- fechar(): só executa se todos os componentes estiverem presentes, altera o estado para `pronta`
- usarNaEscola(): só executa se a mochila estiver `pronta`, exibe mensagem simulando o uso dos itens (ex: "Usando o estojo para escrever, bebendo água da garrafa, anotando no caderno, comendo o lanche...")
- exibirConteudo(): mostra detalhes de todos os componentes e se a mochila está pronta

Desenhe o diagrama UML das classes envolvidas e implemente o código em Java (main) para criar pelo menos duas mochilas, cada uma com configurações diferentes de estojo, garrafa, caderno e lancheira. Todos os métodos da mochila só devem funcionar se ela estiver completa (com todos os componentes) e, para usarNaEscola, a mochila deve estar pronta.


## Barema em formato de tabela

| Critério                                                                          | Pontos |
| --------------------------------------------------------------------------------- | ------ |
| **Diagrama UML das classes envolvidas**                                           | 3,5    |
| - Cada classe criada separadamente                                                |        |
| - Cada classe possui pelo menos 2 atributos corretos                              |        |
| - Mochila possui atributos para cada componente                                   |        |
| - Associação 1-para-1 (sem listas)                                                |        |
| - Mochila possui atributo de estado (pronta ou não)                               |        |
| **Implementação dos métodos da Mochila**                                          | 3,5    |
| - fechar(): verifica se todos os componentes estão presentes e altera o estado    |        |
| - usarNaEscola(): só executa se a mochila estiver pronta e simula o uso dos itens |        |
| - exibirConteudo(): mostra detalhes dos componentes e do estado                   |        |
| - Uso de construtores para inicializar objetos                                    |        |
| **Criação de pelo menos duas mochilas diferentes no main**                        | 3,0    |
| - Cada mochila com configurações diferentes de componentes                        |        |
| - Demonstração do funcionamento dos métodos                                       |        |
| - Diagrama apresenta todas as classes e associações corretamente                  |        |
| - Atributos e métodos principais representados                                    |        |
| **Total**                                                                         | **10** |