const Categoria = require("../../models/categoria");

async function inserirCategoria() {
  const categoria = new Categoria("TesteAqui"); // você pode mudar para um prompt depois
  await categoria.inserir();
}

async function buscarCategorias() {
  await Categoria.buscar();
}

async function atualizarCategoria() {
  await Categoria.atualizar({ nome: "TesteAqui" }, { nome: "Rua" });
}

async function deletarCategoria() {
  await Categoria.deletar({ nome: "Rua" });
}

module.exports = {
  inserirCategoria,
  buscarCategorias,
  atualizarCategoria,
  deletarCategoria,
};