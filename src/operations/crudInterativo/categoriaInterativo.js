const readline = require("readline");
const Categoria = require("../../models/categoria");
const Logger = require("../../utils/logger");

async function inserirCategoriaInterativo(rl, callback) {
  function repetirCampos() {
    rl.question("Digite o nome da categoria: ", async (nome) => {
      const categoria = new Categoria(nome);
      try {
        await categoria.inserir();
        callback();
      } catch (error) {
        Logger.logError("Erro ao inserir categoria: " + error.message);
        console.log("Nome inválido. Tente novamente.\n");
        repetirCampos();
      }
    });
  }
  repetirCampos();
}

async function buscarCategorias() {
  try {
    await Categoria.buscar();
  } catch (error) {
    Logger.logError("Erro ao buscar categoria(s): " + error.message);
  }
}

async function atualizarCategoriaInterativo(rl, callback) {
  rl.question("Nome da categoria a ser atualizada: ", (nomeAntigo) => {
    rl.question("Novo nome: ", async (nomeNovo) => {
      try{
        await Categoria.atualizar({ nome: nomeAntigo }, { nome: nomeNovo });
      } catch (error) {
        Logger.logError("Erro ao atualizar categoria(s): " + error.message);
      }
      callback();
    });
  });
}

async function deletarCategoriaInterativo(rl, callback) {
  rl.question("Nome da categoria a ser deletada: ", async (nome) => {
    if (!nome || nome.trim() === "") {
      console.log("Nome obrigatório. Operação cancelada.");
      Logger.logError("Tentativa de deletar categoria sem informar o nome.");
      return callback();
    }
    try {
      await Categoria.deletar({ nome });
    } catch (error) {
      Logger.logError("Erro ao deletar categoria: " + error.message);
    }
    callback();
  });
}

module.exports = {
  inserirCategoriaInterativo,
  buscarCategorias,
  atualizarCategoriaInterativo,
  deletarCategoriaInterativo
};

