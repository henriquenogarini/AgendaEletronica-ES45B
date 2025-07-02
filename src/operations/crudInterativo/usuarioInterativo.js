const readline = require("readline");
const Usuario = require("../../models/usuario");
const Logger = require("../../utils/logger");

async function inserirUsuarioInterativo(rl, callback) {
  function repetirCampos() {
    rl.question("Digite o nome do usuário: ", (nome) => {
      rl.question("Digite o email do usuário: ", (email) => {
        rl.question("Digite a senha do usuário: ", async (senha) => {
          const user = new Usuario(nome, email, senha);
          try {
          await user.inserir();
          callback();
        } catch (error) {
          Logger.logError("Erro ao inserir usuário: " + error.message);
          console.log("Dados inválidos. Tente novamente.\n");
          repetirCampos();
        }
      });
    });
  });
  }
repetirCampos();
}

async function buscarUsuarios() {
  try {
    await Usuario.buscar();
  } catch (error) {
    Logger.logError("Erro ao buscar usuários: " + error.message);
  }
}

async function atualizarUsuarioInterativo(rl, callback) {
  rl.question("Nome do usuário a ser atualizado: ", (nomeAntigo) => {
    rl.question("Novo nome: ", async (nomeNovo) => {
      try {
        await Usuario.atualizar({ nome: nomeAntigo }, { nome: nomeNovo });
      } catch (error) {
        Logger.logError("Erro ao atualizar usuário: " + error.message);
      }
      callback();
    });
  });
}

async function deletarUsuarioInterativo(rl, callback) {
  rl.question("Nome do usuário a ser deletado: ", async (nome) => {
    try {
      await Usuario.deletar({ nome });
    } catch (error) {
      Logger.logError("Erro ao deletar usuário: " + error.message);
    }
    callback();
  });
}

module.exports = {
  inserirUsuarioInterativo,
  buscarUsuarios,
  atualizarUsuarioInterativo,
  deletarUsuarioInterativo
};