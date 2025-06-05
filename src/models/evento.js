const { connect } = require("../config/db");
const Logger = require("../utils/logger");

class Evento {
  constructor(titulo, descricao, nomeCategoria, nomeUsuario, dataInicio, dataFim) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.nomeCategoria = nomeCategoria;
    this.nomeUsuario = nomeUsuario;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
  }

async inserir() {
    try {
      const { db, client } = await connect();
      const result = await db.collection("eventos").insertOne({
        titulo: this.titulo,
        descricao: this.descricao,
        nomeCategoria: this.nomeCategoria,
        nomeUsuario: this.nomeUsuario,
        dataInicio: this.dataInicio,
        dataFim: this.dataFim
      });
      console.log("Evento inserido com sucesso:", result.insertedId);
      client.close();
    } catch (error) {
      Logger.logError("Erro ao inserir evento: " + error);
    }
  }

  static async buscar(filtro = {}) {
    try {
      const { db, client } = await connect();
      const eventos = await db.collection("eventos").find(filtro).toArray();
      console.log("Eventos encontrados com sucesso:", eventos);
      client.close();
      return eventos;
    } catch (error) {
      Logger.logError("Erro ao buscar eventos: " + error);
    }
  }
  
  static async atualizar(filtro, novosDados) {
    try {
      const { db, client } = await connect();
      const result = await db.collection("eventos").updateMany(filtro, {
        $set: novosDados
      });
      console.log("Eventos atualizados com sucesso:", result.modifiedCount);
      client.close();
    } catch (error) {
      Logger.logError("Erro ao atualizar eventos: " + error);
    }
  }

  static async deletar(filtro) {
    try {
      const { db, client } = await connect();
      const result = await db.collection("eventos").deleteMany(filtro);
      console.log("Eventos deletados com sucesso:", result.deletedCount);
      client.close();
    } catch (error) {
      Logger.logError("Erro ao deletar eventos: " + error);
    }
  }
}

module.exports = Evento;

