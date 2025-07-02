const Categoria = require("../../models/categoria");
const Logger = require("../../utils/logger");

async function inserirCategoria() {
  try{
    const categoria = new Categoria("Saúde"); // você pode mudar para um prompt depois
    await categoria.inserir();
  } catch (error) {
    Logger.logError("Erro ao inserir categoria: " + error.message);
  }
  
}

async function buscarCategorias() {
  try{
    await Categoria.buscar();
  } catch (error) {
    Logger.logError("Erro ao buscar categoria(s): " + error.message);
  }
}

async function atualizarCategoria() {
  try {
    await Categoria.atualizar({ nome: "Saúde" }, { nome: "Saúde e Bem Estar" });
  } catch (error) {
    Logger.logError("Erro ao atualizar categoria(s): " + error.message);
  }
}

async function deletarCategoria() {
  try {
    await Categoria.deletar({ nome: "Saúde e Bem Estar" });
  } catch (error) {
    Logger.logError("Erro ao deletar categoria(s): " + error.message);
  }
}

module.exports = {
  inserirCategoria,
  buscarCategorias,
  atualizarCategoria,
  deletarCategoria,
};