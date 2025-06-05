const readline = require("readline");
const Usuario = require("../../models/usuario");

async function inserirUsuarioInterativo(rl, callback) {
  rl.question("Digite o nome do usuário: ", (nome) => {
    rl.question("Digite o email do usuário: ", (email) => {
      rl.question("Digite a senha do usuário: ", async (senha) => {
        const user = new Usuario(nome, email, senha);
        await user.inserir();
        callback();
      });
    });
  });
}

async function buscarUsuarios() {
  await Usuario.buscar();
}

async function atualizarUsuarioInterativo(rl, callback) {
  rl.question("Nome do usuário a ser atualizado: ", (nomeAntigo) => {
    rl.question("Novo nome: ", async (nomeNovo) => {
      await Usuario.atualizar({ nome: nomeAntigo }, { nome: nomeNovo });
      callback();
    });
  });
}

async function deletarUsuarioInterativo(rl, callback) {
  rl.question("Nome do usuário a ser deletado: ", async (nome) => {
    await Usuario.deletar({ nome });
    callback();
  });
}

module.exports = {
  inserirUsuarioInterativo,
  buscarUsuarios,
  atualizarUsuarioInterativo,
  deletarUsuarioInterativo
};