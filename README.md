[![Build Status](https://travis-ci.org/leonardobork/crescer-discord-bot.svg?branch=master)](https://travis-ci.org/leonardobork/crescer-discord-bot)

# Crescer Bot :robot: :computer:

## Instalação

### Pré-requisitos
Para iniciar , você precisa das seguintes dependências:

* [Git](https://git-scm.com)
* [Node](https://nodejs.org)
* [npm](https://www.npmjs.com/)

### Passo a passo

Clone o repositório.

```bash
git clone https://github.com/leonardobork/crescer-discord-bot.git
```

Depois de clonado, navegue até o diretorio root do projeto e instale as dependências node

```bash
npm install
```
## Variáveis de ambiente

O projeto se conecta com o bot e um banco mongo através de variáveis de ambiente, configure-as criando um arquivo .env no diretório base do projeto, da seguinte maneira:

```
BOT_TOKEN=Seu token de bot aqui
BOT_DB=Seu banco mongo aqui
``` 
## Running

Para rodar o projeto em modo de desenvolvimento use:

```bash
npm run dev
```
## Tests

Para rodar o somente os testes:

```bash
npm run dev-test
```

## Contribuições
Para contribuir com ideias crie uma issue;
Para contribuir com código crie um PR;

Happy coding :smile:


