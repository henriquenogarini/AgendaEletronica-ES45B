const { connect } = require("../config/db");
const Logger = require("../utils/logger");
const crypto = require("crypto");

class Usuario {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  async inserir() {
    try {
      if (!this.nome || !this.email || !this.senha) {
        throw new Error("Nome, email e senha são obrigatórios.");
      }
      const hashsedSenha = crypto.createHash("sha256").update(this.senha).digest("hex");
      const { db, client } = await connect();
      const result = await db.collection("usuarios").insertOne({
        nome: this.nome,
        email: this.email,
        senha: hashsedSenha,
      });
      console.log("Usuário inserido com sucesso: ", result.insertedId);
      client.close();
    } catch (error) {
      Logger.logError("Erro ao inserir usuário: " + error);
    }
  }

  static async buscar(filtro = {}) {
    try {
      const { db, client } = await connect();
      const usuarios = await db.collection("usuarios").find(filtro).toArray();
      console.log("Usuários encontrados com sucesso: ", usuarios);
      client.close();
    } catch (error) {
      Logger.logError("Erro ao buscar usuários: " + error);
    }
  }

  static async atualizar(filtro, novosDados) {
    try {
      if (!filtro || Object.keys(filtro).length === 0) {
        throw new Error("Filtro obrigatório para atualização.");
      }
      if (!novosDados || Object.keys(novosDados).length === 0) {
        throw new Error("Dados novos obrigatórios para atualização.");
      }
      if (novosDados.senha) {
        novosDados.senha = crypto.createHash("sha256").update(novosDados.senha).digest("hex");
      }
      const { db, client } = await connect();
      const result = await db.collection("usuarios").updateMany(filtro, {
        $set: novosDados,
      });
      console.log("Usuários atualizados com sucesso: ", result.modifiedCount);
      client.close();
    } catch (error) {
      Logger.logError("Erro ao atualizar usuários: " + error);
    }
  }

  static async deletar(filtro) {
    try {
      if (!filtro || Object.keys(filtro).length === 0) {
        throw new Error("Filtro obrigatório para deleção.");
      }
      const { db, client } = await connect();
      const result = await db.collection("usuarios").deleteMany(filtro);
      console.log("Usuários deletados com sucesso: ", result.deletedCount);
      client.close();
    } catch (error) {
      Logger.logError("Erro ao deletar usuários: " + error);
    }
  }
}

module.exports = Usuario;