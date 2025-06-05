const Usuario = require("../../models/usuario");

async function inserirUsuario() {
  const user = new Usuario("Joao", "joao@alunos.utfpr.edu.br", "123123124");
  await user.inserir();
}

async function buscarUsuarios() {
  await Usuario.buscar();
}

async function atualizarUsuario() {
  await Usuario.atualizar({ nome: "Joao" }, { email: "joao123@alunos.utfpr.edu.br" });
}

async function deletarUsuario() {
  await Usuario.deletar({ nome: "Joao" });
}

module.exports = {
  inserirUsuario,
  buscarUsuarios,
  atualizarUsuario,
  deletarUsuario,
};