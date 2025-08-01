---
icon: edit
date: 2025-04-19 8:00:00.00 -3
tag:
  - java
  - objeto
  - classe
category:
  - aula
order: 4
---

# Programação Orientada a Objetos

## Paradigmas


Paradigmas de Programação são abordagens ou estilos diferentes de escrever código para resolver problemas. 

A programação estruturada divide o código em estruturas para armazenar dados e funções que executam tarefas específicas. Ela normalmente é indicada para problemas menores e menos complexos. 

Na POO, o código é organizado em objetos que representam entidades do mundo real, com atributos e métodos relacionados. Isso permite a modelagem de problemas complexos de forma mais intuitiva e promove a reutilização de código.

<figure>

```plantuml
@startuml
package "Estruturado" {
   node Dados #orange
   node DadosTratados #green
   storage func

   Dados -> func
   func -> DadosTratados
}
package "Orientado a Objetos" {
   rectangle Classe {
   node "Dados" as D #orange
   node Comportamentos #green

   D -> Comportamentos 
   D <- Comportamentos 
}
@enduml
```
<figcaption> Comparativo entre programação estruturada e Orientada a Objetos.</figcaption>
</figure>

### Exemplo

Imagine um sistema de controle de contas correntes.

Como seria escrito a definição de uma conta corrente em programção estruturada?

```c
struct Conta{
  float saldo;
  int numero_conta;
  char[30] correntista;
}
```

como seria fazer um saque ou um depósito?

```c

int sacar(struct Conta minha_conta, float valor){
  if(minha_conta.saldo>=valor){
    minha_conta.saldo-=valor;
    return 1;
  }
  return 0;
}

int depositar(struct Conta minha_conta, float valor){
  minha_conta.saldo+=valor;
  return 1;  
}

```
Como fazer um saque quando a conta for com limite (cheque especial)?

```c

int sacarComLimite(struct Conta minha_conta, float valor, float limite){
  if(minha_conta.saldo>=valor+limite){
    minha_conta.saldo-=valor;
    return 1;
  }
  return 0;
}
```

## Objeto
[^caelumoo]

- Um objeto é cada uma das entidades identificáveis num dado domínio de aplicação
- Em um sistema Bancário teríamos objetos do tipo: Cliente, Conta, Conta Corrente, Dependente, etc.
- Um objeto também pode ser visto como um agregado de outros objetos (suas partes)

<figure>

```plantuml
@startuml
rectangle "Apartamento"{
    rectangle "Sala" as s
    rectangle "Quarto" as q
    rectangle "Cozinha" as c
    rectangle "Banheiro" as b
s -[hidden]> q
q -[hidden]> c
c -[hidden]> b
}
@enduml  
```

<figcaption> Um objeto como um conjuto de outros objetos.</figcaption>
</figure>


- Um Objeto é uma entidade independente que armazena dados, encapsula serviços, troca mensagens com outros objetos e é modelado para executar as funções do sistema
- Um Objeto pode ser descrito pela identificação de dois elementos básicos: estrutura e comportamento

::: tip Exemplo 
Objeto do tipo **Pessoa**
- **Estrutura** : nome, cpf, idade
- **Comportamento** : trabalhar, descansar
:::

::: tip Exemplo
Objeto do tipo **Conta**
- **Estrutura:** titular, código, saldo
- **Comportamento:** debitarValor, adicionarValor
:::

## Mensagens

- São estímulos enviados aos objetos solicitando que alguma operação seja realizada por um dado objeto
  - Nome da mensagem
  - Parâmetros
- Especifica O QUE deve ser feito
- O comportamento de um objeto é dado pelo conjunto de mensagens que ele pode responder
  
## Características dos Objetos
- Único
- Possui atributos que definem caraterísticas e/ou estado 
- Possuem capacidade de realizar ações que chamamos de métodos ou funções
- Normalmente se diz que um objeto é uma instância de uma Classe.
- O que é uma Classe ?


# Classe
[^caelumoo]
## Origem do termo
- A palavra classe vem da taxonomia da biologia. 
  - Todos os seres vivos de uma mesma classe biológica têm uma série de atributos e comportamentos em comum, mas não são iguais, podem variar nos valores desses atributos e como realizam esses comportamentos.
- Homo Sapiens define um grupo de seres que possuem características em comum
  - Homo Sapiens é um ser humano?
  - Tudo está especificado na classe Homo Sapiens, mas se quisermos mandar alguém correr, comer, pular, precisaremos de uma instância de Homo Sapiens, ou então de um objeto do tipo Homo Sapiens.
## Analogias
- Uma receita de bolo. 
  - Você come uma receita de bolo? 
    - Precisamos instaciá-la, criar um objeto bolo a partir dessa especificação (a classe) para utilizá-la. 
    - Podemos criar centenas de bolos a partir dessa classe (a receita, no caso), eles podem ser bem semelhantes, alguns até idênticos, mas são objetos diferentes.
- A planta de uma casa é uma casa?...
## Conceito
- Uma classe é uma descrição de um conjunto que compartilham os mesmos atributos(características), operações, relacionamentos e semântica
- Todos os objetos são instâncias de classes, onde a classe descreve as propriedades e comportamentos daquele objeto
- **Atributos** são propriedades de uma classe, que descreve um intervalo de valores que as instâncias podem apresentar. Uma Classe pode ter qualquer número de atributos ou nenhum
- **Operações** correspondem aos processos que a classe pode realizar
  
<figure>

```plantuml
@startuml
left to right direction
map "Especificação \nde uma conta" as conta{
}
map conta1{
  numero =>1
  cliente => Fulano
  saldo =>100
  limite =>0
}
map conta2{
  numero =>2
  cliente =>Beltrano
  saldo =>90
  limite =>10
}
map conta3{
  numero =>3
  cliente =>Cicrano
  saldo =>900
  limite =>0
}

conta --> conta1 : new
conta --> conta2 : new
conta --> conta3 : new
@enduml
```

<figcaption> Representação de vários objetos de uma mesma estrutura.</figcaption>
</figure>


 - Estrutura (molde) que define os atributos e/ou estados de um conjunto de objetos com características similares.
 - Define o comportamento de seus objetos (ações que o objeto pode fazer) através de métodos. 
 - Descreve os serviços (ações) providos por seus objetos 
 - Quais informações eles podem armazenar

```java
class Conta{
  int numero;
  String cliente;
  double saldo;
  double limite;
}
```

### Usando a classe

```java
class Programa{
  public static void main(String[] args){
    new Conta();
  }
}
```

- Objeto criado, mas como acessar?


```java
class Programa{
  public static void main(String[] args){
    Conta minhaConta;
    minhaConta = new Conta();
  }
}
```
- Através da variável minhaConta, podemos acessar o objeto recém criado para alterar seu cliente, seu saldo, etc

```java
class Programa{
  public static void main(String[] args){
    Conta minhaConta;
    minhaConta = new Conta();

    minhaConta.cliente = "Leandro";
    minhaConta.saldo = 10.0;

    System.out.println("Saldo atual: "+minhaConta.saldo);
  }
}
```


## Atributos de uma Classe


- Caraterísticas e/ou estado de uma classe
- Após a classe ser instanciada em um objeto os atributos vão receber valores (caraterísticas e/ou estados) que definem o objeto

```java{2-5}
class Conta{
  int numero;//atributo
  String cliente;//atributo
  double saldo;//atributo
  double limite;//atributo
}
```


## Métodos de uma Classe


- Conjunto de ações que um determinado objeto pode executar
- Definem o que um objeto pode fazer
- São acionados por outros objetos
  - Os objetos se comunicam através de métodos
  - Troca de mensagens

## Métodos sem retorno

- Um método que saca uma determinada quantidade e devolve nenhuma informação para quem acionar esse método


```java{7-10}
class Conta{
  int numero;
  String cliente;
  double saldo;
  double limite;

  void saca(double quantidade){//método
    double novoSaldo = saldo - quantidade;
    saldo = novoSaldo;
  }
}
```

- Fazer um depósito

```java{7-10,12-14}
class Conta{
  int numero;
  String cliente;
  double saldo;
  double limite;

  void saca(double quantidade){//método
    double novoSaldo = saldo - quantidade;
    saldo = novoSaldo;
  }

  void deposita(double quantidade){//método
    saldo += quantidade;
  }
}
```

@[code](./code/objeto/Programa.java)


## Método com retorno

- No caso do nosso método saca, podemos devolver um valor booleano indicando se a operação foi bem sucedida.


```java
class Conta{
  //...

  boolean saca(double valor){
    if(saldo<valor){
      return false;
    }else{
      saldo -= valor;
      return true;
    }
  }

}
```

```java
class Programa{
  public static void main(String[] args){
    //... 
    minhaConta.saldo = 100.0;

    boolean consegui=minhaConta.saca(20);
    if(consegui){
      System.out.println("Consegui sacar");
    }else{
      System.out.println("Não consegui sacar");
    }
  }
}
```

## Referência ao Objeto

```java
class Programa{
  public static void main(String[] args){
    Conta c1;
    c1 = new Conta();
    Conta c2;
    c2 = new Conta();
  }
}
```

- c1 uma variável que "aponta" para o objeto(referência).

<figure>

```plantuml
@startuml
rectangle "Memoria"{
    rectangle "Conta" as c2m
    rectangle "Conta" as c1m
    rectangle "c2" as c2
    rectangle "c1" as c1
    c2m<--c2
    c1m<--c1
}
@enduml  
```

<figcaption> Representação da memória com duas instancias de Conta.</figcaption>
</figure>


```java
class Programa{
  public static void main(String[] args){
    Conta c1;
    c1 = new Conta();
    Conta c2 = c1;    
  }
}
```

<figure>

```plantuml
@startuml
rectangle "Memoria"{
    rectangle "Conta" as c1m
    rectangle "c1" as c1
    rectangle "c2" as c2
    c1m<--c1
    c1m<--c2
}
@enduml
```

<figcaption> Representação da memória com apenas uma instancia de Conta.</figcaption>
</figure>

::: warning ?
Como seria a transferência de valores entre duas contas?
:::

<figure>

```plantuml
@startuml
skinparam style strictuml
autoactivate on

participant Programa
participant "c1:Conta" as c1
participant "c2:Conta" as c2

create c1
Programa -> c1 :new
create c2
Programa -> c2 :new

Programa -> c1 :transferir(c2,200)
c1 -> c1 : saque(200)
return sucesso
c1 -> c2 : deposita(200)
return sucesso
return sucesso
@enduml
```

<figcaption>Diagram de sequencia para a transferência entre contas</figcaption>
</figure>

::: details 

```java
void transferir(Conta destino, double quantidade){
  if(saca(quantidade)){
    destino.deposita(quantidade);
  }   
}
```
:::

### Comparando

```java
public static void main(String args[]) {
  Conta c1 = new Conta();
  c1.cliente = "Leandro";    
  c1.saldo = 100.0;    
  Conta c2 = new Conta();    
  c2.cliente = "Leandro";    
  c2.saldo = 100.0;    
  if (c1 == c2) {
    System.out.println("Contas iguais");    
  }
}
```

- O operador `==` compara o conteúdo das variáveis
  - variáveis não guardam o objeto, e sim o endereço em que ele se encontra (referência)
  - As contas podem ser equivalentes no nosso critério de igualdade, porém elas não são o mesmo objeto.




#### equals

```java
public static void main(String args[]) {
  Conta c1 = new Conta();
  c1.cliente = "Leandro";    
  c1.saldo = 100.0;    
  Conta c2 = new Conta();    
  c2.cliente = "Leandro";    
  c2.saldo = 100.0;    
  if (c1.equals(c2)) {
    System.out.println("Contas iguais");    
  }
}
```

```java
class Conta {
  //...
  public boolean equals(Conta outraConta) {
    return numero == outraConta.numero;
  }
  //...
  
}
```
## Transformando o objeto em String

### toString

O método `toString()` em Java é um método da classe Object (falaremos de herança mais para frente) que retorna uma representação em formato de string do objeto em questão.

Se uma classe em Java deseja ter sua própria representação em formato de string, ela pode sobrescrever esse método e fornecer uma implementação personalizada. A implementação sobrescrita deve retornar uma string que descreva o objeto de uma forma útil e significativa para o usuário.

Por exemplo, a seguinte classe `Pessoa` sobrescreve (falaremos de herança mais para frente) o método toString() para fornecer uma representação personalizada de uma pessoa:

```java
public class Pessoa {
    private String nome;
    private int idade;

    public Pessoa(String nome, int idade) {
        nome = nome;
        idade = idade;
    }

    @Override
    public String toString() {
        return "Pessoa{" +
                "nome='" + nome + "'" +
                ", idade=" + idade + "}";
    }
}
```

Neste exemplo, o método `toString()` retorna uma string formatada que inclui o nome e a idade da pessoa em questão, com o seguinte formato: `Pessoa{nome='Alice', idade=30}`.

Para usar o método `toString()` em uma instância da classe `Pessoa`, basta chamá-lo em uma referência para um objeto `Pessoa`, como no exemplo abaixo:

```java
Pessoa person = new Pessoa("Alice", 30);
String personString = person.toString(); // retorna "Pessoa{nome='Alice', idade=30}"
System.out.println(person);//Escreve Pessoa{nome='Alice', idade=30} no console
```

## Exercícios

- [Exercício Data OO](exercicios/02_exercicio_data_OO.md)
- [Exercício Modelagem Carro](exercicios/03_exercicio_modelagem_carro.md)


## Referências

<!-- @include: ../../includes/bib.md -->
