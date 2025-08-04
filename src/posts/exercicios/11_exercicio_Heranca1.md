---
icon: dumbbell
date: 2025-07-28 8:02:00.00 -3
tag:
  - heranca
category:
  - exercicio
order: 12
---

# Exercício de Herança 1

1. Considere o código abaixo, que utiliza as classes da UML apresentada, e indique, caso exista algum erro, a linha e qual o erro.

<figure>

```plantuml{kroki=true}
@startuml

class Animal{
    +void mover()
}

class Mamifero{
    +void mamar()
}

Animal <|-- Mamifero
Mamifero <|-- Morcego
Mamifero <|-- Cachorro
@enduml
```

<figcaption>Relação entre Animal, Mamímero, Morcego e Cachorro.</figcaption>
</figure>

@[code](../code/heranca/code1.java)

@[code](../code/heranca/code2.java)


<figure>

```plantuml{kroki=true}
@startuml 

label "new Cachorro()"

rectangle "Cachorro" #palegreen;line:green;text:green{
    rectangle "Mamifero" #aliceblue;line:blue;text:blue{
        label "mamar" #aliceblue;text:blue   
        rectangle "Animal" #aliceblue;line:red;text:red{
            label "mover" #aliceblue;text:red   
        }
    }
} 

@enduml
```

<figcaption>Criando um objeto Cachorro.</figcaption>
</figure>

<figure>

```plantuml{kroki=true}
@startuml 

label "new Morcego()"

rectangle "Morcego" #palegreen;line:green;text:green{
    rectangle "Mamifero" #aliceblue;line:blue;text:blue{
        label "mamar" #aliceblue;text:blue   
        rectangle "Animal" #aliceblue;line:red;text:red{
            label "mover" #aliceblue;text:red   
        }
    }
} 

@enduml
```

<figcaption>Criando um objeto Morcego.</figcaption>
</figure>
