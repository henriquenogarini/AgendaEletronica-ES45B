const usuarioCrud = require("./operations/crud/usuarioCrud");
const categoriaCrud = require("./operations/crud/categoriaCrud");
const eventoCrud = require("./operations/crud/eventoCrud");

//Executa as operações de CRUD para usuário, categoria e evento, sem opção de escolha do usuário.
//Para testar cada caso, comente as linhas que não deseja executar.
//Para executar, basta rodar o arquivo app.js.
//Caso queira algo mais interativo, utilize o arquivo appInterativo.js.
async function executar() {
  //await usuarioCrud.inserirUsuario(); // Inserir usuário
  //await categoriaCrud.inserirCategoria(); // Inserir categoria
  //await eventoCrud.inserirEvento(); // Inserir evento

  //await usuarioCrud.buscarUsuarios(); // Buscar usuários
  //await categoriaCrud.buscarCategorias(); // Buscar categorias
  //await eventoCrud.buscarEventos(); // Buscar eventos

  //await usuarioCrud.atualizarUsuario(); // Atualizar usuário
  //await categoriaCrud.atualizarCategoria(); // Atualizar categoria
  //await eventoCrud.atualizarEvento(); // Atualizar evento

  //await usuarioCrud.deletarUsuario(); // Deletar usuário
  //await categoriaCrud.deletarCategoria(); // Deletar categoria
  //await eventoCrud.deletarEvento(); // Deletar evento
}

executar();