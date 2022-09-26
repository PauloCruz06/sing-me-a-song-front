# <p align = "center"> Projeto #21 Sing me a song (front) </p>


<p align = "center">
   <img src="https://img.shields.io/badge/author-PauloCruz06-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/PauloCruz06/projeto21-sing-me-a-song-front?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Descrição

Sing me a song é uma aplicação para recomendação anônima de músicas. Quanto mais as pessoas curtirem uma recomendação, maior a chance dela ser recomendada para outras pessoas. Nesse projeto o objetivo principal é fazer testes automatizados para verificar a integridade do [front-end da aplicação](https://github.com/driven-projects/sing-me-a-song/tree/main/front-end).

***

## :computer:	 Tecnologias e Conceitos

- ReactJs
- Node.js
- JavaScript
- Axios
- Cypress

***

## 🏁 Rodando a aplicação

Este projeto foi inicializado usando [Create React App](https://github.com/facebook/create-react-app). Também foi utilizado [Axios](https://github.com/axios/axios) para fazer requisições na api.

Para essa aplicação são feitos testes de ponta a ponta (e2e) utilizando o [Cypress](https://github.com/cypress-io/cypress).

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/PauloCruz06/projeto21-sing-me-a-song-front.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```
Também é necessário que o [back-end](https://github.com/PauloCruz06/projeto21-sing-me-a-song-back.git) dessa aplicação esteja rodando na sua máquina.


Após executar o back-end, basta iniciar com:
```
npm start
```

Para rodar os testes ponta a ponta com o Cypress é preciso que tanto que o front-end quanto o back-end estejam sendo executados. Depois para instalar e abrir o cypress no seu sistema digite o seguinte comando em um outro terminal:
```
npx cypress open
```
Em seguida será aberta uma janela do cypress com as configurações dos testes e2e, basta clicar em um dos testes e ele será executado.


:grey_exclamation:[template usado nesse readme](https://gist.github.com/luanalessa/7f98467a5ed62d00dcbde67d4556a1e4#file-readme-md) :)