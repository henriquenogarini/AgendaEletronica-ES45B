const { connect } = require("../config/db");
const Logger = require("../utils/logger");

class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  async inserir() {
    try {
      const { db, client } = await connect();
      const result = await db.collection("usuarios").insertOne({
        nome: this.nome,
        email: this.email,
        senha: this.senha,
      });
      console.log("Usuário inserido com sucesso: ", result.insertedId);
      client.close();
    } catch (error) {
      Logger.log("Erro ao inserir usuário: " + error);
    }
  }

  static async buscar(filtro = {}) {
    try {
      const { db, client } = await connect();
      const usuarios = await db.collection("usuarios").find(filtro).toArray();
      console.log("Usuários encontrados com sucesso: ", usuarios);
      client.close();
    } catch (error) {
      Logger.log("Erro ao buscar usuários: " + error);
    }
  }

  static async atualizar(filtro, novosDados) {
    try {
      const { db, client } = await connect();
      const result = await db.collection("usuarios").updateMany(filtro, {
        $set: novosDados,
      });
      console.log("Usuários atualizados com sucesso: ", result.modifiedCount);
      client.close();
    } catch (error) {
      Logger.log("Erro ao atualizar usuários: " + error);
    }
  }

  static async deletar(filtro) {
    try {
      const { db, client } = await connect();
      const result = await db.collection("usuarios").deleteMany(filtro);
      console.log("Usuários deletados com sucesso: ", result.deletedCount);
      client.close();
    } catch (error) {
      Logger.log("Erro ao deletar usuários: " + error);
    }
  }
}

module.exports = Usuario;