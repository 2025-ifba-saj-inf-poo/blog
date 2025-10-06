---
icon: edit
date: 2025-07-14 07:30:00.00 -3
tag:
  - vetor
  - lista
category:
  - aula
order: 8
---

# Trabalhando com ArrayList

[^AluraColl]

Antes de chegarmos em toda a hierarquia das  `Collections` vamos falar e utilizar um pouco o `ArrayList`

## Adicionando elementos em uma lista

Para criar um objeto do tipo `ArrayList`, certamente fazemos como sempre: utilizando o operador `new`. Mas repare que acabamos passando um pouco mais de informações. Ao declarar a referência a uma `ArrayList`, passamos qual o tipo de objeto com o qual ela trabalhará. Se queremos uma lista de nomes de aulas, vamos declarar `ArrayList<String>`. Crie a classe `TestandoListas`, adicionando os nomes de algumas aulas que teremos nesse curso:

```java
import java.util.List;
import java.util.ArrayList;

public class TestandoListas {

    public static void main(String[] args) {

        String aula1 = "Modelando a classe Aula";
        String aula2 = "Conhecendo mais de listas";
        String aula3 = "Trabalhando com Cursos e Sets";

        ArrayList<String> aulas = new ArrayList<>();
        aulas.add(aula1);
        aulas.add(aula2);
        aulas.add(aula3);        

        System.out.println(aulas);
    }
}
```

Qual é o resultado desse código? Ele mostra as aulas adicionadas em sequência! Por que isso acontece? Pois a classe `ArrayList`, ou uma de suas mães, reescreveu o método `toString`, para que internamente fizesse um for, concatenando os seus elementos internos separados por vírgula.

## Removendo elementos

Bastante simples! O que mais podemos fazer com uma lista? As operações mais básicas que podemos imaginar, como por exemplo remover um determinado elemento. Usamos o método remove e depois mostramos o resultado para ver que a primeira foi removida:

```java
aulas.remove(0);
System.out.println(aulas);
```

Por que 0? Pois as listas, assim como a maioria dos casos no Java, são indexadas a partir do 0, e não do 1.

## Percorrendo uma lista

Bem, talvez não seja a melhor das ideias fazer um `System.out.println` na nossa lista, pois talvez queiramos mostrar esses itens de alguma outra forma, como por exemplo um por linha. Como fazer isso? Utilizando o for de uma maneira especial, popularmente foreach. Lembrando que foreach não existe no Java como comando, e sim como um caso especial do for mesmo. Olhe o código:

```java
for (String aula : aulas) {
    System.out.println("Aula: " + aula);
}
```

## contains

O método `contains` é utilizado para verificar se um determinado elemento está presente na lista. Ele retorna `true` se o elemento estiver na lista e `false` caso contrário. O método utiliza o `equals` para comparar os elementos, então é importante que a classe dos objetos dentro da lista implemente corretamente o método `equals`. Veja o exemplo:

```java
import java.util.ArrayList;
import java.util.List;  
import java.util.Objects;

class Aluno {
    private String nome;
    private String matricula;

    public Aluno(String matricula, String nome) {
        this.matricula = matricula;
        this.nome = nome;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof Aluno)) return false;
        Aluno aluno = (Aluno) obj;
        return Objects.equals(matricula, aluno.matricula);
    }
}

public class TestandoListas {
    public static void main(String[] args) {
        List<Aluno> alunos = new ArrayList<>();
        Aluno aluno1 = new Aluno("A1","João");
        Aluno aluno2 = new Aluno("A2","Maria");
        alunos.add(aluno1);
        alunos.add(aluno2);
        Aluno aluno3 = new Aluno("A1","João");
        System.out.println(alunos.contains(aluno3)); // true, pois aluno3 é igual a aluno1
    }
}
```

## Acessando elementos

E se eu quisesse saber apenas a primeira aula? O método aqui é o get. Ele retorna o primeiro elemento se passarmos o 0 como argumento:

```java
String primeiraAula = aulas.get(0);
System.out.println("A primeira aula é " + primeiraAula);
```

Você pode usar esse mesmo método para percorrer a lista toda, em vez do foreach. Para isso, precisamos saber quantos elementos temos nessa lista. Nesse caso, utilizamos o método size para limitar o nosso for:
```java
for (int i = 0; i < aulas.size(); i++) {
    System.out.println("aula : " + aulas.get(i));
}
```

## Mais uma forma de percorrer elementos, agora com Java 8

Uma outra forma de percorrer nossa lista é utilizando as sintaxes e métodos novos incluídos no Java 8. Temos um método (não um comando!) agora que se chama `forEach`. Ele recebe um objeto do tipo `Consumer`, mas o interessante é que você não precisa criá-lo, você pode utilizar uma sintaxe bem mais enxuta, mas talvez assustadora a primeira vista, chamada *lambda*. Repare:

```java
aulas.forEach(aula -> {
    System.out.println("Percorrendo:");
    System.out.println("Aula " + aula);
});
```

## Exemplo sistema banco

@[code](./code/listExemploBanco/Conta.java)

@[code](./code/listExemploBanco/Agencia.java)

@[code](./code/listExemploBanco/App.java)

## Get com listas

::: tabs

@tab ArrayList

```java
    public ArrayList<Conta> getContas() {
        return contas;
    }

    //main

    agencia.getContas().add(new Conta())//?
```

@tab List.copyOf

```java

    import java.util.List;
    //...
    public List<Conta> getContas() {
        return List.copyOf(contas);
    }
    
    //main
    agencia.getContas().add(new Conta())//?
```

::: 


## Associações com listas


<figure>

```plantuml {kroki}
@startuml

class  Cliente {
  String  nome
  int  codigo
  List<Conta> contas
  List<CartaoDeCredito> cartoes
}

class  CartaoDeCredito {
  int  numero
  String  dataDeValidade
  Cliente cliente
  Conta conta
}

class Agencia{
  int numero
  List<Conta> contas
}

class Conta{
  int numero
  Cliente titular
  double saldo
  double limite
  Agencia agencia

}

Conta --> Agencia : agencia
Agencia --> Conta : contas
CartaoDeCredito --> Cliente : cliente
Cliente -> CartaoDeCredito : cartoes
Cliente --> Conta : contas 
Conta --> Cliente : titular
CartaoDeCredito --> Conta : conta


 
@enduml  
```

<figcaption> UML de classes do domínio bancários com Associações.</figcaption>
</figure>


## Referências

<!-- @include: ../../includes/bib.md -->