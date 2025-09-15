---
icon: edit
date: 2025-09-15 07:30:00.00 -3
tag:
  - greenfoot
  - jogo
category:
  - trabalho
order: 15
---
### Exercício de Refatoração: Otimizando o Jogo "Hole.io" com Orientação a Objetos

**Objetivo:**

Após construir a primeira versão funcional do nosso jogo, o próximo passo crucial no desenvolvimento de software é a **refatoração**. Vamos aprimorar nosso código para aplicar os conceitos de **Herança**, **Encapsulamento** e **Construtores** de forma mais robusta e elegante.

O objetivo é fazer com que a classe `Swallowable` se torne mais inteligente e responsável, simplificando as classes filhas (`Rock`, `Tree`) e tornando nosso código mais fácil de manter e expandir.

**Instruções:**

Siga os passos abaixo para refatorar o código do seu projeto.

**1. Refatorando a Superclasse `Swallowable`**

Esta classe se tornará o cérebro por trás de todos os objetos que podem ser engolidos.

*   **Encapsulamento:** O atributo `objectSize` não deve ser acessível diretamente pelas classes filhas. Transforme-o em `private` e crie um método "getter" público para acessá-lo.

*   **Construtor com Parâmetros:** Modifique o construtor da `Swallowable` para que ele receba o tamanho e a imagem como parâmetros. Isso permitirá que cada subclasse informe seu tamanho e qual imagem deve ser exibida no momento da criação.

*   **Responsabilidade de Dimensionamento:** Um objeto deve poder chamar "desenhar" de si mesmo. A `Swallowable` deve ser responsável por aplicar o `objectSize` ao tamanho visual de sua imagem. Então, vamos criar um método `scaleImage` com uma definição de visibilidade que a subclasse possa chamar.

::: warning ?

Faz sentido existir alguma instancia de `Swallowable` sem ser uma especialização (como `Rock` ou `Tree`)?

:::

**2. Simplificando as Subclasses (`Rock` e `Tree`)**

Com a superclasse mais inteligente, as subclasses se tornam muito mais simples.

*   **Chamada ao `super()`:** O construtor de `Rock` e `Tree` deve, como primeira ação, chamar o construtor da superclasse, passando seu tamanho específico e definição da imagem

**3. Ajustando a Classe `Hole`**

Finalmente, ajuste o método `eat()` da classe `Hole` para acessar o tamanho dos objetos engolíveis através do método getter que você criou na `Swallowable`. Isso garante que a `Hole` não dependa diretamente dos detalhes internos das subclasses. 

O `Hole` deve crescer ao engolir qualquer objeto da classe `Swallowable`, desde que seu tamanho seja maior que o do objeto.

Ao engolir um objeto, o `Hole` deve crescer 10% do tamanho do objeto engolido. Por exemplo, se o `Hole` engolir uma `Tree` de tamanho 30, ele deve crescer 3 unidades.

```java
size += item.getObjectSize() * 0.1; // Cresce 10% do tamanho do objeto engolido
}
```

**4. Ajuste a movimentação da `Hole`**

Para melhorar a experiência do jogador, ajuste a movimentação da `Hole` para que seja pelo teclado. Utilize as teclas de seta para mover a `Hole` para cima, baixo, esquerda e direita. Isso tornará o controle do jogo mais intuitivo.

O `Hole` deve ficar no centro da tela quando o jogo começar e permanecer assim durante todo o jogo. Ao mover a `Hole`, o cenário (mundo) deve se mover em torno dele, criando a ilusão de que a `Hole` está se movendo pelo ambiente.

Para isso, você pode implementar a movimentação do cenário em resposta às teclas de seta pressionadas, ajustando a posição dos objetos no mundo em vez da `Hole` em si.

Então o código do método `followMouse()` da classe `Hole` não faz mais sentido.

Os objetos que podem ser engolidos pelo `Hole` devem adicionar a movimentação pelo cenário em seu método `act()`, verificando as teclas de seta pressionadas e ajustando a posição dos objetos em conformidade. Em qual classe esse código deve ficar?

```java
//...
    if (Greenfoot.isKeyDown("up")) {
        // Move o objeto para baixo
    }
    if (Greenfoot.isKeyDown("down")) {
        // Move o objeto para cima
    }
    if (Greenfoot.isKeyDown("left")) {
        // Move o objeto para a direita
    }
    if (Greenfoot.isKeyDown("right")) {
        // Move o objeto para a esquerda
    }   
//...
```


Para que o objetos possam sair da tela (`World`), você pode passar um novo parâmetro no construtor da classe `MyWorld` (`bounded`) como `false`. Assim, o mundo não limitará os objetos dentro da tela.


```java
import greenfoot.*;

public class MyWorld extends World {
    public MyWorld() {
        super(800, 800, 1, false); 
    }
}
```

**5. Exibindo pontuação**

A pontuação (tamanho do `Hole`) deve ser exibida no canto superior esquerdo da tela.

Utilize o método `showText` da classe `World` para exibir a pontuação. Atualize a pontuação sempre que o `Hole` crescer.

```java
// No método act() da classe Hole
// Exibe a pontuação no canto superior esquerdo
getWorld().showText("Pontos: " + size, 50, 25); 
```

**Resultado Final**

Ao final, seu código estará mais organizado, cada classe terá responsabilidades mais claras e adicionar novos objetos engolíveis (como um `Carro` ou uma `Casa`) será uma tarefa muito mais simples. Esta estrutura é um excelente exemplo do poder da herança e do encapsulamento na Orientação a Objetos.
