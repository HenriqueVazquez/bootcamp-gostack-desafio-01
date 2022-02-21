const express = require('express');
const server = express();

server.use(express.json());

const projects = [
  {id: "1", title: 'Novo projeto', tasks: ["Javascript", "React"] },
  { id: "2", title: 'Novo projeto2', tasks: ["Javascript", "Node"] },
];

//Middleware global para contar quantas requisições foram feitas

server.use(function(req, res, next) {
  let cont = 0;
  console.count("Número de requisições:");

  next();
})

//Middleware local para verificar se projeto existencia
function checkProjectExists(req, res, next) {
  const {id } = req.params;
  const project = projects.find(project => project.id === id);
  if(!project) {
    return res.status(400).json({Error: `Project does not exists`});
  }

  return next();
}

//Buscar todos os projetos
server.get('/projects', (req, res) => {
  return res.json(projects);
});

//Busca projeto especifico
server.get('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const project = projects.find(project => project.id === id);
  return res.json(project);
});

//Cadastrar projeto 
server.post('/projects', (req, res) => {
  const { id, title, tasks } = req.body;

  const project= {
    id,
    title,
    tasks    
  }
  
  projects.push(project);

  return res.json(project);
});

//Alterar nome do projeto 
server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = projects.find(project => project.id === id);
  project.title = title;
  return res.json(project);
});


//Deletar projeto pelo id
server.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params; 
  const project = projects.findIndex(project => project.id === id);
  projects.splice(project, 1);
  return res.send();
});

// cadastrar uma tarefa no array de tarefas
server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = projects.find(project => project.id === id);
  project.tasks.push(title);
  return res.json(project);
});


server.listen(3000);