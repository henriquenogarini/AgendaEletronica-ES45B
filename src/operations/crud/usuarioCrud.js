const Usuario = require("../../models/usuario");
const Logger = require("../../utils/logger");

async function inserirUsuario() {
  try {
    const user = new Usuario("Henrique Nogarini", "henriquecarvalho@alunos.utfpr.edu.br", "123456");
    await user.inserir();
  } catch (error) {
    Logger.logError("Erro ao inserir usuário: " + error.message);
  }
}

async function buscarUsuarios() {
  try {
    await Usuario.buscar();
  } catch (error) {
    Logger.logError("Erro ao buscar usuários: " + error.message);
  }
}

async function atualizarUsuario() {
  try {
    await Usuario.atualizar({ email: "henriquecarvalho@alunos.utfpr.edu.br" }, { nome: "João Silva", senha: "novaSenha123" });
  } catch (error) {
    Logger.logError("Erro ao atualizar usuário: " + error.message);
  }
}

async function deletarUsuario() {
  try {
    await Usuario.deletar({ email: "henriquecarvalho@alunos.utfpr.edu.br" });
  } catch (error) {
    Logger.logError("Erro ao deletar usuário: " + error.message);
  }
}

module.exports = {
  inserirUsuario,
  buscarUsuarios,
  atualizarUsuario,
  deletarUsuario,
};