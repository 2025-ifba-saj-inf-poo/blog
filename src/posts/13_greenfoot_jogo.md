---
icon: edit
date: 2025-08-25 09:00:00.00 -3
tag:
  - greenfoot
  - jogo
category:
  - aula
order: 14
---
# Criando um Jogo no Estilo Hole.io

Neste tutorial, vamos criar um jogo inspirado no popular "Hole.io". O objetivo é controlar um buraco que se move pelo mundo, engolindo objetos para crescer. Quanto maior o buraco fica, maiores os objetos que ele pode engolir.

## Configuração Inicial do Cenário

Primeiro, crie um novo cenário Java no Greenfoot. Vamos chamá-lo de "HoleIO".

### Criando o Mundo

A primeira coisa que precisamos é de um mundo para o nosso jogo. Clique com o botão direito na classe `World` e selecione `new subclass`. Nomeie-a como `MyWorld`. Você pode escolher uma imagem de fundo para o seu mundo, como um asfalto ou grama. Para este exemplo, um fundo simples serve.

No construtor da classe `MyWorld`, defina o tamanho do mundo. Um mundo de 800x600 pixels é um bom começo.

```java
import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

public class MyWorld extends World
{
    public MyWorld()
    {    
        // Cria um novo mundo com 800x600 células com um tamanho de célula de 1x1 pixels.
        super(800, 600, 1); 
    }
}
```

### Criando o Buraco (Player)

Agora, vamos criar o nosso jogador. O jogador será um buraco que se move pelo cenário.

1.  Clique com o botão direito na classe `Actor` e selecione `new subclass`.
2.  Nomeie a classe como `Hole`.
3.  Escolha uma imagem para o buraco. Uma imagem simples de um círculo preto funciona perfeitamente.

Compile o cenário e coloque uma instância do `Hole` no mundo para ver como fica.

## Movendo o Buraco com o Mouse

Diferente do jogo do caranguejo, onde usamos o teclado, aqui controlaremos o buraco usando o mouse. Queremos que o buraco siga o cursor do mouse sempre que ele estiver sobre a janela do jogo.

Abra o editor da classe `Hole` e adicione o seguinte código ao método `act()`:

```java
import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

public class Hole extends Actor
{
    public void act()
    {
        followMouse();
    }
    
    private void followMouse()
    {
        MouseInfo mouse = Greenfoot.getMouseInfo();
        
        if (mouse != null) {
            setLocation(mouse.getX(), mouse.getY());
        }
    }
}
```

**Entendendo o código:**
*   `Greenfoot.getMouseInfo()`: Este método nos dá informações sobre o estado do mouse, como sua localização. Se o mouse não estiver sobre a janela do jogo, ele retorna `null`.
*   `if (mouse != null)`: Verificamos se o mouse está na janela para evitar erros.
*   `setLocation(mouse.getX(), mouse.getY())`: Este comando move o ator `Hole` para as coordenadas X e Y do cursor do mouse.

Compile o código, coloque um `Hole` no mundo e clique em *Run*. Você verá que o buraco agora segue o seu mouse!

## Criando Objetos para Engolir

Um buraco não é nada sem coisas para engolir. Vamos criar um objeto simples para começar.

1.  Clique com o botão direito em `Actor` e crie uma nova subclasse chamada `Rock`.
2.  Escolha uma imagem de uma pedra para ela.

Agora, precisamos popular nosso mundo com algumas pedras. Abra a classe `MyWorld` e adicione um método `prepare()` para adicionar os objetos iniciais.

```java
import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

public class MyWorld extends World
{
    public MyWorld()
    {    
        super(800, 600, 1); 
        prepare();
    }
    
    /**
     * Prepara o mundo para o início do programa.
     * Ou seja: cria os objetos iniciais e os adiciona ao mundo.
     */
    private void prepare()
    {
        for (int i = 0; i < 20; i++) {
            int x = Greenfoot.getRandomNumber(getWidth());
            int y = Greenfoot.getRandomNumber(getHeight());
            addObject(new Rock(), x, y);
        }
    }
}
```
*   Usamos um loop `for` para criar 20 pedras.
*   `Greenfoot.getRandomNumber(getWidth())` gera um número aleatório entre 0 e a largura do mundo, para que as pedras apareçam em locais aleatórios.

Compile e execute. Seu mundo agora deve estar cheio de pedras!

## Mecânica de Engolir e Crescer

Agora vem a parte divertida: fazer o buraco engolir as pedras e crescer.

Volte para a classe `Hole` e vamos adicionar a lógica para "comer".

```java
import greenfoot.*;

public class Hole extends Actor
{
    private int size = 50; // Tamanho inicial do buraco

    public Hole()
    {
        updateImage();
    }

    public void act()
    {
        followMouse();
        eat();
    }
    
    private void followMouse()
    {
        MouseInfo mouse = Greenfoot.getMouseInfo();
        if (mouse != null) {
            setLocation(mouse.getX(), mouse.getY());
        }
    }
    
    private void eat()
    {
        Actor rock = getOneIntersectingObject(Rock.class);
        if (rock != null) {
            getWorld().removeObject(rock);
            size += 5; // Aumenta o tamanho
            updateImage();
            Greenfoot.playSound("eating.wav"); // Reutilizando o som do tutorial anterior
        }
    }
    
    private void updateImage()
    {
        GreenfootImage image = new GreenfootImage("black-circle.png"); // Use o nome da sua imagem
        image.scale(size, size);
        setImage(image);
    }
}
```

**O que há de novo:**
*   `private int size = 50;`: Uma variável para rastrear o tamanho do nosso buraco.
*   `getOneIntersectingObject(Rock.class)`: Este método verifica se o `Hole` está tocando em algum objeto da classe `Rock`. Se estiver, ele retorna o objeto; caso contrário, retorna `null`.
*   `getWorld().removeObject(rock)`: Se um objeto `Rock` for encontrado, ele é removido do mundo.
*   `size += 5;`: A cada pedra engolida, aumentamos a variável `size`.
*   `updateImage()`: Criamos um novo método para atualizar a imagem do buraco. Ele carrega a imagem original, redimensiona-a para o novo `size` e a aplica ao ator. Chamamos este método no construtor para definir o tamanho inicial e sempre que o buraco cresce.

**Nota:** Você precisará de uma imagem base para o buraco (ex: "black-circle.png") na pasta `images` do seu cenário.

Compile e execute. Agora, quando você passar o buraco sobre as pedras, elas desaparecerão e o buraco ficará visivelmente maior!

## Adicionando Objetos Maiores e Lógica de Tamanho

O desafio do jogo vem da necessidade de crescer para engolir objetos maiores. Vamos adicionar uma nova classe, `Tree`.

1.  Crie uma nova subclasse de `Actor` chamada `Tree`.
2.  Escolha uma imagem de árvore para ela.

Agora, vamos modificar a lógica para que o buraco só possa engolir objetos se for grande o suficiente. Para fazer isso de forma organizada, criaremos uma classe "pai" para todos os objetos que podem ser engolidos.

1.  Crie uma nova subclasse de `Actor` chamada `Swallowable`. Não precisa de imagem.
2.  Abra a classe `Swallowable` e adicione o seguinte código:

```java
import greenfoot.*;

public class Swallowable extends Actor
{
    protected int objectSize;
}
```
3.  Agora, modifique as classes `Rock` e `Tree` para que elas "herdem" de `Swallowable` em vez de `Actor`.

**Classe Rock:**
```java
import greenfoot.*;

public class Rock extends Swallowable 
{
    public Rock()
    {
        this.objectSize = 20; // Tamanho da pedra
    }
}
```

**Classe Tree:**
```java
import greenfoot.*;

public class Tree extends Swallowable
{
    public Tree()
    {
        this.objectSize = 80; // Tamanho da árvore (maior que o tamanho inicial do buraco)
    }
}
```

Agora, atualize o método `eat()` na classe `Hole`:

```java
private void eat()
{
    Swallowable item = (Swallowable) getOneIntersectingObject(Swallowable.class);
    
    if (item != null && this.size > item.objectSize) {
        getWorld().removeObject(item);
        size += 5;
        updateImage();
        Greenfoot.playSound("eating.wav");
    }
}
```
**Mudanças:**
*   Agora procuramos por qualquer objeto da classe `Swallowable`.
*   A condição `if` agora tem uma segunda parte: `this.size > item.objectSize`. Isso verifica se o tamanho do buraco (`this.size`) é maior que o tamanho do item que ele está tentando engolir.

Finalmente, adicione algumas árvores ao seu mundo no método `prepare()` da classe `MyWorld`:

```java
private void prepare()
{
    // Adiciona 20 pedras
    for (int i = 0; i < 20; i++) {
        addObject(new Rock(), Greenfoot.getRandomNumber(getWidth()), Greenfoot.getRandomNumber(getHeight()));
    }
    
    // Adiciona 10 árvores
    for (int i = 0; i < 10; i++) {
        addObject(new Tree(), Greenfoot.getRandomNumber(getWidth()), Greenfoot.getRandomNumber(getHeight()));
    }
}
```

Compile e execute. Você verá que o buraco pode engolir as pedras, mas não as árvores. Conforme você engole as pedras, o buraco cresce. Quando o tamanho dele ultrapassar 80, ele será capaz de engolir as árvores também!

## Próximos Passos

A partir daqui, você pode expandir o jogo de várias maneiras:
*   **Adicionar mais objetos:** Crie classes para carros, prédios, etc., cada um com um `objectSize` diferente.
*   **Pontuação:** Adicione um contador de pontos que aumenta a cada objeto engolido. Você pode exibir a pontuação na tela usando `world.showText()`.
*   **Inimigos:** Adicione outros buracos controlados pelo computador que competem com você.
*   **Condição de Vitória:** O jogo pode terminar quando todos os objetos forem engolidos.

Este tutorial forneceu a base para um jogo divertido. Experimente, adicione suas próprias ideias e veja o que você pode criar!
