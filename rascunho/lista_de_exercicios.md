# Lista de Exercícios e Desafios - Greenfoot e POO

Use estes exercícios para praticar e expandir o jogo "Guerra Espacial".

## Exercícios Básicos (Fixação)

1.  **Velocidade Variável:** Mude a velocidade de movimento da `Nave`, do `Laser` e do `Inimigo`. O que acontece se você usa um valor negativo no método `move()`?
2.  **Controle Diferente:** Altere os controles da nave para usar as teclas "W" (para cima), "A" (esquerda) e "D" (direita).
3.  **Tiro mais Lento:** Faça com que a nave não possa atirar continuamente. Ela deve ter um pequeno "cooldown" (tempo de espera) entre um tiro e outro. (Dica: use um atributo contador na classe `Nave`).
4.  **Inimigos mais Rápidos:** Faça com que a velocidade dos inimigos aumente conforme a pontuação do jogador sobe.

## Exercícios Intermediários (Aplicação de Conceitos)

5.  **Sistema de Vidas:**
    a. Adicione um atributo `private int vidas = 3;` na classe `Nave`.
    b. Crie um método `perderVida()` na `Nave`.
    c. Faça a `Nave` ser destruída quando colidir com um `Inimigo`. Quando isso acontecer, chame o método `perderVida()`.
    d. Quando as vidas chegarem a zero, mostre uma mensagem de "Game Over" e pare o jogo (`Greenfoot.stop()`).

6.  **Power-Up de Tiro Duplo:**
    a. Crie uma nova classe `Actor` chamada `PowerUp`. Faça ela aparecer de vez em quando e se mover pela tela.
    b. Quando a `Nave` colidir com o `PowerUp`, ative um modo de "tiro duplo" por um tempo limitado.
    c. (Dica: crie um atributo booleano `private boolean temTiroDuplo = false;` na `Nave` e um contador para a duração do poder).

7.  **Inimigo que Atira:**
    a. Crie uma nova classe `InimigoAtirador` que herda de `Inimigo`.
    b. Dê a ele a capacidade de criar e atirar um novo tipo de `Actor`, o `TiroInimigo`.
    c. O que acontece se o `TiroInimigo` colidir com a `Nave`?

## Desafios Avançados (Criatividade e Design)

8.  **Chefão (Boss):**
    a. Crie uma classe `Chefe` que herda de `Inimigo`.
    b. O `Chefe` deve ser maior, mais lento e precisar de vários tiros de laser para ser destruído (ele precisa de um atributo de vida!).
    c. Faça o `Chefe` ter um padrão de movimento diferente (por exemplo, de um lado para o outro).
    d. Faça o `Chefe` aparecer apenas quando o jogador atingir uma determinada pontuação.

9.  **Animação de Explosão:**
    a. Encontre uma sequência de imagens de uma explosão (sprite sheet).
    b. Crie uma classe `Explosao` que, ao ser adicionada ao mundo, troca sua imagem rapidamente para criar uma animação.
    c. Instancie um objeto `Explosao` sempre que um inimigo ou a nave for destruída.

10. **Projeto Final Aberto:** Modifique o jogo com um tema completamente novo!
    - **Fundo do Mar:** A nave é um submarino, os inimigos são peixes maus, o tiro é uma bolha.
    - **Fazenda:** A nave é um fazendeiro, os inimigos são pragas, o tiro é semente.
    - Use sua criatividade para aplicar todos os conceitos aprendidos em um projeto autoral.
