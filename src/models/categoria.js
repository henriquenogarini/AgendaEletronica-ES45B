const { connect } = require("../config/db");
const Logger = require("../utils/logger");

class Categoria {
  constructor(nome) {
    this.nome = nome;
  }

  async inserir() {
    try {
      if (!this.nome || this.nome.trim() === "") {
        throw new Error("O nome da categoria é obrigatório.");
      }
      const { db, client } = await connect();
      const result = await db.collection("categorias").insertOne({
        nome: this.nome,
      });
      console.log("Categoria inserida com sucesso:", result.insertedId);
      client.close();
    } catch (error) {
      Logger.logError("Erro ao inserir categoria: " + error.message);
    }
  }

  static async buscar(filtro = {}) {
    try {
      const { db, client } = await connect();
      const categorias = await db.collection("categorias").find(filtro).toArray();
      console.log("Categoria(s) encontradas com sucesso:", categorias);
      client.close();
      return categorias;
    } catch (error) {
      Logger.logError("Erro ao buscar categoria(s): " + error.message);
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
      const { db, client } = await connect();
      const result = await db.collection("categorias").updateMany(filtro, {
        $set: novosDados,
      });
      console.log("Categoria(s) atualizadas com sucesso:", result.modifiedCount);
      client.close();
    } catch (error) {
      Logger.logError("Erro ao atualizar categoria(s): " + error.message);
    }
  }

  static async deletar(filtro) {
    try {
      if (!filtro || Object.keys(filtro).length === 0) {
        throw new Error("Filtro obrigatório para deletar categorias.");
      }
      const { db, client } = await connect();
      const result = await db.collection("categorias").deleteMany(filtro);
      console.log("Categoria(s) deletadas com sucesso:", result.deletedCount);
      client.close();
    } catch (error) {
      Logger.logError("Erro ao deletar categoria(s): " + error.message);
    }
  }
}

module.exports = Categoria;