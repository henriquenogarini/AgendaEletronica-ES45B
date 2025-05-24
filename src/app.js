const Usuario = require("./usuario");
const Evento = require("./evento");

async function testar() {
  const user = new Usuario("Henrique", "henriquecarvalho@alunos.utfpr.edu.br");
  await user.inserir();

  await Categoria.inserirCategoriasPadrao();

  const evento = new Evento("Reunião de projeto", "2025-06-01", "2025-06-01", "ID_DO_USUARIO");
  await evento.inserir();
}

testar();