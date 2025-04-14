---
icon: edit
date: 2025-04-07 08:40:00.00 -3
tag:
  - links
category:
  - multimidia
order: 1
star: true
---
# Montando Ambiente de trabalho

## Github

O [GitHub](https://github.com/) é uma plataforma de hospedagem de código-fonte e controle de versão que utiliza o Git. Ele permite que desenvolvedores colaborem em projetos, gerenciem versões de código, criem repositórios públicos ou privados e utilizem ferramentas de integração contínua. É amplamente utilizado para compartilhar projetos de código aberto e colaborar em equipes de desenvolvimento.

Para começar a usar o GitHub, você pode instalar o [GitHub CLI (gh)](https://cli.github.com/) ou o [GitHub Desktop](https://desktop.github.com/) para facilitar o gerenciamento de repositórios diretamente do seu computador.



## Windows Scoop


[Scoop](https://scoop.sh/) é um gerenciador de pacotes para Windows. Ele permite instalar e gerenciar softwares de forma eficiente, semelhante ao apt no Linux ou ao Homebrew no macOS.  Scoop simplifica a instalação de aplicativos, ferramentas de desenvolvimento e utilitários, automatizando o processo de download, instalação e atualização.  Ele oferece uma interface de linha de comando e integra-se bem com o PowerShell.  Usando Scoop, você pode instalar softwares de fontes confiáveis, mantendo seu sistema atualizado e organizado.

Para instalar o scoop abra o PowerShell e rode o seguinte comando:

```console
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```
Para instalar o scoop abra o PowerShell e rode o seguinte comando:


```console
scoop bucket add main
scoop install main/git
scoop install main/gh
scoop bucket add java
scoop install java/temurin-lts-jdk
scoop install main/maven
scoop bucket add extras
scoop install extras/scene-builder
scoop install extras/vscode
```


## Linux SDKman

O [SDKMAN!](https://sdkman.io/) (Software Development Kit Manager) é um gerenciador de kits de desenvolvimento de software (SDKs) para várias linguagens de programação, como Java, Groovy, Kotlin, Scala e muitas outras. Ele permite que você instale, gerencie e alterne entre diferentes versões de SDKs de forma fácil e eficiente, tudo através da linha de comando.  

para instalar

```console
curl -s "https://get.sdkman.io" | bash
```

## gh


GitHub CLI (gh) é uma ferramenta de linha de comando oficial do GitHub que permite  interagir com repositórios, pull requests, issues e outros recursos do GitHub diretamente do terminal, simplificando o fluxo de trabalho de desenvolvimento.

Para efetuar login no github
```console
gh auth login
```
Siga as instruções do terminal e acesse o link de autorização

ao ternimar usa interação com o github, efeute o logout

```console  
gh auth logout
```


# SW utilizados

- [JDK](https://adoptium.net/temurin/releases/)
- [Maven](https://maven.apache.org/)
- Git
    - [Github Desktop (windows)](https://desktop.github.com/)
- Visual Studio Code
- [Scene Builder](https://gluonhq.com/products/scene-builder/)



# Links

- [Repl IT IDE Java Online](https://replit.com/languages/java10)

# PodCast

- [Zupcast no youtube](http://bit.ly/zupcastnoyoutube)

# Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/sZAxLRMxEUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- [Java // Dicionário do Programador](https://youtu.be/sZAxLRMxEUo)

<iframe width="560" height="315" src="https://www.youtube.com/embed/9yzMKaKcoC0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- [Você ainda deve aprender Java em 2023?](https://youtu.be/9yzMKaKcoC0)

<iframe width="560" height="315" src="https://www.youtube.com/embed/jpuJ1qrluoU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- [Orientação a objetos com Roberta Arcoverde](https://youtu.be/jpuJ1qrluoU)

<iframe width="560" height="315" src="https://www.youtube.com/embed/vX4ttJ5BDNk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- [Java 20 turbina a JVM [Cortes do Compilado]](https://youtu.be/vX4ttJ5BDNk)
- [Java no YouTube](https://www.youtube.com/@java)


