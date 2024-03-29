<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

# Desafio 1: Conceitos do NodeJS

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/HenriqueVazquez/bootcamp-gostack-desafio-01?color=%2304D361">
  
  <a href="www.linkedin.com/in/henrique-vazquez">
    <img alt="Made by Henrique Vazquez" src="https://img.shields.io/badge/made%20by-Henrique%20Vazquez-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/HenriqueVazquez/bootcamp-gostack-desafio-01/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/HenriqueVazquez/bootcamp-gostack-desafio-01?style=social">
  </a>
</p>

<h2> Teste com insomnia</h2>
<p align="center">
<a href="https://insomnia.rest/run/?label=%20bootcamp-gostack-desafio-01&uri=https%3A%2F%2Fgithub.com%2FHenriqueVazquez%2Fbootcamp-gostack-desafio-01%2Fblob%2Fmain%2FInsomnia_2022-02-21.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>
<h2> :rocket: Sobre o desafio</h2>

foi criado uma aplicação para armazenar projetos e suas tarefas do zero utilizando [Express](https://expressjs.com/pt-br/).
Enunciado do desafio abaixo

### Rotas

- `POST /projects`: A rota deve receber `id` e `title` dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: A rota deve alterar apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota deve deletar o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: A rota deve receber um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

### Exemplo

Se eu chamar a rota `POST /projects` repassando `{ id: 1, title: 'Novo projeto' }` e a rota `POST /projects/1/tasks` com `{ title: 'Nova tarefa' }`, meu array de projetos deve ficar assim:

```js
[
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];
```

### Middlewares

- Crie um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

- Crie um middleware global chamado em todas requisições que imprime (`console.log`) uma contagem de quantas requisições foram feitas na aplicação até então;



## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by Henrique Vazquez :wave:

