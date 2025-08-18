# Guia do Professor - Curso Greenfoot e POO

## 1. Visão Geral
Este guia oferece orientações para aplicar o "Curso Completo: Programação Orientada a Objetos com Greenfoot" em sala de aula. O material foi projetado para ser flexível, adaptando-se a durações de 20 a 30 horas/aula.

## 2. Objetivos Gerais do Curso
- Desmistificar a programação e apresentá-la como uma ferramenta criativa.
- Introduzir os conceitos fundamentais da Programação Orientada a Objetos (POO) de forma prática e visual.
- Capacitar os alunos a desenvolverem um jogo 2D simples, do início ao fim.
- Fomentar o raciocínio lógico, a resolução de problemas e a colaboração.

## 3. Estratégias Pedagógicas
- **Aprendizagem Baseada em Projetos:** O curso é centrado na construção de um jogo, o que mantém os alunos engajados e dá um propósito claro ao aprendizado.
- **Teoria e Prática Imediata:** Cada conceito teórico é seguido por uma atividade "hands-on". Incentive os alunos a "quebrar" o código e experimentar. O erro é uma etapa fundamental do aprendizado.
- **Analogias do Mundo Real:** Utilize as analogias propostas (forma de bolo, peça de teatro) para conectar os conceitos abstratos de POO com o cotidiano dos alunos.
- **Aprendizagem em Pares (Pair Programming):** Incentive os alunos a trabalharem em duplas. Um aluno "pilota" (escreve o código) enquanto o outro "navega" (revisa e sugere ideias). Isso melhora a qualidade do código e desenvolve habilidades de comunicação.

## 4. Orientações por Módulo

### Módulo 1:
- **Foco:** Quebrar o gelo. O objetivo é mostrar que o Greenfoot é fácil e divertido.
- **Ponto de Discussão:** Peça aos alunos para descreverem a diferença entre a classe no diagrama e o objeto no mundo. Use a analogia da receita e do bolo para reforçar.
- **Cuidado:** Não se aprofunde em código ainda. A interação manual é crucial para criar um modelo mental correto antes de introduzir a sintaxe do Java.

### Módulo 2:
- **Foco:** Introduzir formalmente os conceitos de POO e a sintaxe básica do Java.
- **Ponto de Discussão:** "Se a classe `Nave` é a receita, quais seriam os ingredientes (atributos) e quais seriam os passos do preparo (métodos)?"
- **Atividade Extra:** Peça para os alunos criarem uma nova classe `Rochav` que não faz nada, apenas para praticar o processo de criação de classes.

### Módulo 3:
- **Foco:** Construção guiada do jogo. Esta é a espinha dorsal do curso.
- **Ritmo:** Avance passo a passo. Certifique-se de que todos os alunos completaram uma parte antes de passar para a próxima. Circule pela sala para ajudar.
- **Pontos de Verificação:**
    - Ao final da Parte 1: "Todos conseguem controlar a nave com o teclado?"
    - Ao final da Parte 2: "A nave de todos está atirando?"
    - Ao final da Parte 3: "O laser está destruindo os inimigos?"
- **Conceitos-Chave:** Reforce os pilares da POO à medida que eles aparecem:
    - **Criação de Objetos:** `new Laser()`
    - **Encapsulamento:** `private int score;` e o método `addScore()`. Explique a importância de proteger os dados.
    - **Herança:** A criação do `InimigoChefe`. Desenhe o diagrama de herança no quadro.
    - **Polimorfismo:** O fato de o laser já saber como lidar com o `InimigoChefe`. Este é o conceito mais abstrato, use a analogia: "Se você tem uma garagem (método) que sabe consertar um `Veiculo` (classe pai), ela também saberá consertar um `Carro` e uma `Moto` (classes filhas)".

### Módulo 4:
- **Foco:** Dar autonomia aos alunos.
- **Estratégia:** Transforme os tópicos em desafios. "Desafio 1: Quem consegue adicionar um som de explosão?". "Desafio 2: Criem uma tela de Game Over quando a nave for atingida".

## 5. Sugestões de Avaliação
- **Avaliação Contínua:** Observe a participação, o engajamento e a capacidade de resolver pequenos problemas durante as aulas.
- **Avaliação do Projeto:** Use uma rubrica para avaliar o jogo final.
    - **Funcionalidade (40%):** O jogo funciona conforme o esperado? (Nave se move, atira, inimigos aparecem, colisão funciona).
    - **Aplicação de Conceitos de POO (30%):** O aluno utilizou corretamente herança, encapsulamento, etc? (Ex: criou uma subclasse para um inimigo diferente?).
    - **Criatividade e Extensões (20%):** O aluno adicionou funcionalidades extras? (Novos inimigos, power-ups, sons, tela de início).
    - **Qualidade do Código (10%):** O código está organizado e comentado?

## 6. Respostas para os Exercícios (Ver Arquivo de Exercícios)
- Forneça as soluções ou discuta-as em aula após os alunos tentarem resolver. O processo de tentativa é mais importante que a resposta final.
