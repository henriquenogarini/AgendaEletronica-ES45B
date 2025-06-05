const Usuario = require("./usuario");
const Evento = require("./evento");

async function inserirUsuario() {
  const user = new Usuario("Henrique", "henriquecarvalho@alunos.utfpr.edu.br", "senha123");
  await user.inserir();
}

async function inserirCategoria() {
  const categoria = new Categoria("Reunião");
  await categoria.inserir();
}

async function inserirEvento() {
  const evento = new Evento("Reunião de equipe", "2023-10-01T10:00:00Z", "2023-10-01T11:00:00Z", "Sala de reuniões");
  await evento.inserir();
}

inserirUsuario();
inserirCategoria();
inserirEvento();