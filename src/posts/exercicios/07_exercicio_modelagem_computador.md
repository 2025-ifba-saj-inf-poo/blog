---
icon: dumbbell
date: 2025-06-02 08:00:00.00 -3
tag:
  - java
category:
  - exercicio
order: 8
---

# Exercício: Modelagem Computador


1. Utilizando os conceitos de Orientação a Objetos (atributos, métodos e construtores) e associação, construa um programa com base nas informações abaixo.

  Um computador é composto por:
  - memória RAM;
    - Exemplo de atributos: capacidade (int), tipo (String)
  - Processador;
    - Exemplo de atributos: modelo (String), velocidade (double)
  - HD.
    - Exemplo de atributos: armazenamento (int), ehSSD (boolean)

  Cada um desses componentes (memória, processador e HD) deve ser representado por uma classe separada, e devem possuir pelo menos 2 atributos. 

  O computador pode realizar as seguintes ações:
    - ligar(): Altera estado para ligado (só executa se computador completo)
    - desligar(): Altera estado para desligado
    - instalarPrograma(String nome): Exibe mensagem de instalação (ex: "Instalando Photoshop...")
    - exibirConfiguracoes(): Lista detalhes de todos os componentes

  
Desenhe o diagrama UML das classes envolvidas e implemente o código em Java (main) para criar pelo menos dois computadores. Cada computador deve está com configurações diferentes de memória, processador e HD. Todos os métodos do computador só devem funcionar se o computador estiver completo (com todos os componentes) e para `instalarPrograma` o computado deve estar ligado. 


<!-- @include: ../code/exercicioComputador/Computador.puml -->