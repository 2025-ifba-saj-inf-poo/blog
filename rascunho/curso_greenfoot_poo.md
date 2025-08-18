# Curso Completo: Programação Orientada a Objetos com Greenfoot

## Bem-vindo!

Este curso foi desenhado para ser sua porta de entrada no universo da programação de jogos e da Programação Orientada a Objetos (POO) utilizando Java e a ferramenta Greenfoot. Inspirado pela filosofia de que aprender a programar pode ser uma atividade visual, interativa e, acima de tudo, divertida.

**Público-alvo:** Estudantes do ensino médio e superior, ou qualquer pessoa curiosa que queira dar os primeiros passos em programação.
**Objetivo:** Ao final deste curso, você será capaz de entender os conceitos fundamentais da POO e aplicá-los para criar seus próprios jogos 2D.

---

### **Módulo 1: Introdução ao Greenfoot e à Lógica de Programação**

#### **1.1. Objetivos de Aprendizagem**
- Entender o que é o Greenfoot e por que ele é ideal para aprender a programar.
- Familiarizar-se com a interface do Greenfoot.
- Compreender os dois conceitos mais importantes: **Mundo (World)** e **Ator (Actor)**.
- Criar e interagir com objetos de forma manual.

#### **1.2. O que é o Greenfoot?**
Imagine que você quer construir uma peça de teatro. Você precisa de um **palco** (o cenário onde tudo acontece) e de **atores** (os personagens que executam as ações). O Greenfoot funciona exatamente assim.

- **World (Mundo):** É o palco. É a classe que representa o cenário do seu jogo (uma floresta, o espaço, uma quadra de futebol).
- **Actor (Ator):** São os personagens e objetos no palco. O herói, o inimigo, uma moeda, uma parede, tudo que tem comportamento ou interage com algo é um Ator.

O Greenfoot nos permite programar em **Java**, uma das linguagens mais usadas no mundo, mas de uma forma muito mais visual e intuitiva. Ele remove as partes complexas e repetitivas para que possamos focar na lógica e na criatividade.

#### **1.3. Explorando a Interface**
Ao abrir o Greenfoot, você verá:
1.  **O Mundo (Centro):** A grade grande onde seu jogo irá rodar.
2.  **Diagrama de Classes (Direita):** A representação visual do seu código. Você verá as caixas `World` e `Actor` e as classes que você criar herdarão delas.
3.  **Controles de Execução (Abaixo):** Os botões `Act` (executa um passo da lógica) e `Run` (executa continuamente).

![Interface Conceitual do Greenfoot](https://www.greenfoot.org/images/screens/greenfoot-screen-3.6.1.png)

#### **1.4. Atividade Hands-On: O Wombat e a Folha**
O Greenfoot vem com cenários de exemplo. Vamos usar o "Wombats".
1.  Abra o cenário `wombats`.
2.  No Diagrama de Classes, clique com o botão direito na classe `Wombat` e selecione `new Wombat()`.
3.  Clique em qualquer lugar do mundo para adicionar um Wombat.
4.  Faça o mesmo com a classe `Leaf` (Folha).
5.  **Interação Manual:** Clique com o botão direito no objeto Wombat que você criou no mundo. Você verá um menu de "ações" (métodos) que ele pode executar, como `move()` e `turnLeft()`. Experimente chamá-los!
6.  **Execução Automática:** Clique no botão `Run`. O que acontece?

#### **1.5. Reflexão**
- O que você acha que o botão `Act` faz? E o `Run`?
- Qual a diferença entre a **classe** `Wombat` (no diagrama) e o **objeto** Wombat (no mundo)?

---

### **Módulo 2: Fundamentos de Programação Orientada a Objetos (POO)**

#### **2.1. Objetivos de Aprendizagem**
- Entender o que são Classes e Objetos usando analogias.
- Aprender o que são Atributos e Métodos.
- Escrever seu primeiro código em Java usando o método `act()`.

#### **2.2. Classes e Objetos: A Forma de Bolo**
Este é o conceito mais importante da POO.
- **Classe:** É a **receita** ou a **forma de um bolo**. Ela define todas as características e comportamentos que algo pode ter. Por exemplo, a classe `Cachorro` define que todo cachorro tem uma raça, uma cor, e sabe latir.
- **Objeto:** É a **instância** da classe. É o **bolo pronto**, feito a partir da receita. Você pode ter vários objetos da mesma classe: `rex` (um `Cachorro` marrom), `toby` (um `Cachorro` branco), etc. Cada um é um objeto independente, mas ambos vieram da mesma "forma".

No Greenfoot, `Wombat` é a classe. Quando você cria um `new Wombat()`, está criando um objeto daquela classe.

#### **2.3. Atributos e Métodos: O que eles Têm e o que eles Fazem**
- **Atributos (ou Campos):** São as **características** de um objeto, suas variáveis internas. Para um `Jogador`, os atributos podem ser `vida`, `pontuacao`, `velocidade`. Cada objeto guarda seus próprios valores para seus atributos.
- **Métodos:** São as **ações** que um objeto pode executar. Para um `Jogador`, os métodos podem ser `mover()`, `atirar()`, `perderVida()`.

#### **2.4. Atividade Hands-On: Fazendo o Ator se Mover Sozinho**
1.  Crie um novo cenário vazio em Greenfoot (`Scenario > New Java Scenario...`).
2.  Crie uma nova subclasse de `Actor`. Chame-a de `Nave`. Escolha uma imagem de foguete para ela.
3.  Dê um duplo clique na classe `Nave` para abrir o editor de código. Você verá algo assim:

    ```java
    import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

    public class Nave extends Actor
    {
        /**
         * Act - do whatever the Nave wants to do. This method is called whenever
         * the 'Act' or 'Run' buttons are pressed in the environment.
         */
        public void act()
        {
            // Adicione seu código de ação aqui.
        }
    }
    ```
4.  Dentro do método `act()`, digite `move(5);`. O método `move()` é um método que todo `Actor` já possui por herança!
5.  Clique em **Compile** no editor.
6.  Agora, adicione um objeto `Nave` ao mundo e clique em `Run`. Ela se move sozinha!

#### **2.5. Reflexão**
- O que aconteceria se você mudasse o número dentro de `move()`?
- Como você faria a nave virar um pouco a cada "ato"? (Dica: existe um método `turn()`).

---

### **Módulo 3: Tutorial Prático - Jogo "Guerra Espacial"**

Vamos construir um jogo de nave completo, aplicando todos os conceitos de POO.

#### **Parte 1: Criando o Mundo e a Nave do Jogador**
1.  **O Mundo:** Crie uma subclasse de `World` chamada `Espaco`. No construtor dela, podemos definir o tamanho e a cor de fundo.
    ```java
    // Dentro da classe Espaco.java
    public Espaco()
    {
        super(800, 600, 1); // Largura, Altura, Tamanho da célula
        getBackground().setColor(Color.BLACK);
        getBackground().fill();
    }
    ```
2.  **A Nave:** Já criamos a classe `Nave`. Agora, vamos fazer ela ser controlada pelo teclado.
    ```java
    // Dentro do método act() da classe Nave.java
    public void act()
    {
        if (Greenfoot.isKeyDown("left"))
        {
            turn(-5);
        }
        if (Greenfoot.isKeyDown("right"))
        {
            turn(5);
        }
        if (Greenfoot.isKeyDown("up"))
        {
            move(5);
        }
    }
    ```
    **Conceito-Chave:** Estamos usando `if` (estruturas de controle) para verificar uma condição (se uma tecla está pressionada) e executar uma ação.

#### **Parte 2: Atirando Lasers (Criação de Objetos)**
1.  **Classe Laser:** Crie uma nova classe `Actor` chamada `Laser`. A única coisa que ela precisa fazer é se mover para cima.
    ```java
    // Dentro do método act() da classe Laser.java
    public void act()
    {
        move(10);
        // Lógica para remover o laser quando ele sai da tela (veremos depois)
    }
    ```
2.  **Fazendo a Nave Atirar:** Como a `Nave` cria um `Laser`? Ela precisa instanciar um novo objeto `Laser` e adicioná-lo ao mundo.
    ```java
    // Adicione este código DENTRO do método act() da Nave.java
    if (Greenfoot.isKeyDown("space"))
    {
        getWorld().addObject(new Laser(), getX(), getY());
    }
    ```
    **Conceito-Chave:** `new Laser()` cria um novo objeto. `getWorld().addObject()` o coloca no mundo na posição `(getX(), getY())` da nave.

#### **Parte 3: Inimigos e Colisão**
1.  **Classe Inimigo:** Crie um `Actor` chamado `Inimigo`. Faça ele se mover para baixo.
    ```java
    // Dentro do método act() da classe Inimigo.java
    public void act()
    {
        move(3);
    }
    ```
2.  **Gerando Inimigos:** O `Espaco` (nosso `World`) é o responsável por gerar inimigos de tempos em tempos.
    ```java
    // Dentro do método act() da classe Espaco.java
    public void act()
    {
        if (Greenfoot.getRandomNumber(100) < 1)
        {
            addObject(new Inimigo(), Greenfoot.getRandomNumber(800), 0);
        }
    }
    ```
3.  **Detectando Colisão:** Como o `Laser` sabe que acertou um `Inimigo`?
    ```java
    // Dentro do método act() da classe Laser.java
    public void act()
    {
        move(10);
        Actor inimigo = getOneIntersectingObject(Inimigo.class);
        if (inimigo != null)
        {
            getWorld().removeObject(inimigo); // Remove o inimigo
            getWorld().removeObject(this);    // Remove o próprio laser
        }
    }
    ```
    **Conceitos-Chave:**
    - `getOneIntersectingObject(Inimigo.class)`: Verifica se o laser está tocando em algum objeto da classe `Inimigo`.
    - `!= null`: Significa "se encontrou alguém".
    - `removeObject()`: Tira um ator do mundo.

#### **Parte 4: Pontuação (Encapsulamento)**
1.  **Atributo de Pontuação:** Onde guardar a pontuação? No `Mundo`! Ele gerencia o estado geral do jogo.
    ```java
    // Adicione este atributo no topo da classe Espaco.java
    private int score = 0;
    ```
    **Pilar da POO (Encapsulamento):** O `score` é `private`, ou seja, só a própria classe `Espaco` pode modificá-lo diretamente. Isso protege o dado de alterações indevidas.
2.  **Método para Aumentar Pontos:** Para que outros objetos possam alterar a pontuação, criamos um método público.
    ```java
    // Adicione este método na classe Espaco.java
    public void addScore(int points)
    {
        score = score + points;
        showText("Score: " + score, 100, 25); // Mostra o placar na tela
    }
    ```
3.  **Chamando o Método:** Agora, o `Laser`, quando destrói um inimigo, pode "pedir" ao mundo para adicionar pontos.
    ```java
    // Modifique o if dentro do act() do Laser.java
    if (inimigo != null)
    {
        Espaco espaco = (Espaco) getWorld(); // Pega a referência do mundo
        espaco.addScore(10); // Adiciona 10 pontos
        getWorld().removeObject(inimigo);
        getWorld().removeObject(this);
    }
    ```

#### **Parte 5: Inimigos Diferentes (Herança e Polimorfismo)**
1.  **Classe InimigoChefe:** Crie uma nova classe chamada `InimigoChefe`, mas desta vez, faça ela **herdar de `Inimigo`**, não de `Actor`.
    ```java
    public class InimigoChefe extends Inimigo
    {
        // Ele já sabe se mover, pois herdou isso do Inimigo!
        // Vamos apenas dar a ele mais vida (veremos como implementar isso nos exercícios)
    }
    ```
    **Pilar da POO (Herança):** `InimigoChefe` **é um** `Inimigo`. Ele herda todos os atributos e métodos da classe pai.
2.  **Polimorfismo:** A mágica acontece agora. O nosso `Laser` já sabe destruir o `InimigoChefe`! Por quê? Porque o método `getOneIntersectingObject(Inimigo.class)` detecta a classe `Inimigo` **e qualquer uma de suas filhas**. Ele trata o `InimigoChefe` como se fosse um `Inimigo`. Isso é Polimorfismo!

---

### **Módulo 4: Próximos Passos e Desafios**

#### **4.1. Adicionando Sons**
- Use `Greenfoot.playSound("som.wav");` para tocar um efeito sonoro. Onde você colocaria o som do laser? E o da explosão?

#### **4.2. Melhorando a Interface**
- Use o método `showText("Texto", x, y)` no seu `World` para criar uma tela de início ou de "Game Over".

#### **4.3. Onde Aprender Mais?**
- **Documentação Oficial do Greenfoot:** A melhor fonte de consulta.
- **Greenfoot Gallery:** Veja projetos feitos por outras pessoas e estude o código delas.
- **Comunidade Greenfoot:** Participe de fóruns e tire suas dúvidas.

---
