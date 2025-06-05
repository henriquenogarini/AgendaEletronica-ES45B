const { connect } = require("../config/db");
const Logger = require("../utils/logger");

class Categoria {
  constructor(nome) {
    this.nome = nome;
  }

  async inserir() {
    try {
      const { db, client } = await connect();
      const result = await db.collection("categorias").insertOne({
        nome: this.nome,
      });
      console.log("Categoria inserida com sucesso:", result.insertedId);
      client.close();
    } catch (error) {
      Logger.logError("Erro ao inserir categoria: " + error);
    }
  }

  static async buscar(filtro = {}) {
    try {
      const { db, client } = await connect();
      const categorias = await db.collection("categorias").find(filtro).toArray();
      console.log("Categorias encontradas com sucesso:", categorias);
      client.close();
      return categorias;
    } catch (error) {
      Logger.logError("Erro ao buscar categorias: " + error);
    }
  }

  static async atualizar(filtro, novosDados) {
    try {
      const { db, client } = await connect();
      const result = await db.collection("categorias").updateMany(filtro, {
        $set: novosDados,
      });
      console.log("Categorias atualizadas com sucesso:", result.modifiedCount);
      client.close();
    } catch (error) {
      Logger.logError("Erro ao atualizar categorias: " + error);
    }
  }

  static async deletar(filtro) {
    try {
      const { db, client } = await connect();
      const result = await db.collection("categorias").deleteMany(filtro);
      console.log("Categoria(a) deletadas com sucesso:", result.deletedCount);
      client.close();
    } catch (error) {
      Logger.logError("Erro ao deletar categorias: " + error);
    }
  }
}

module.exports = Categoria;