const { connect } = require("../config/db");
const Logger = require("../utils/logger");

class Evento {
  constructor(titulo, dataInicio, dataFim, usuarioId, categoria) {
    this.titulo = titulo;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
    this.usuarioId = usuarioId;
    this.categoria = categoria;
  }

  async inserir() {
    try {
      const { db, client } = await connect();
      const result = await db.collection("eventos").insertOne({
        titulo: this.titulo,
        dataInicio: this.dataInicio,
        dataFim: this.dataFim,
        usuarioId: this.usuarioId,
        categoria: this.categoria
      });
      console.log("Evento inserido:", result.insertedId);
      client.close();
    } catch (error) {
      Logger.log("Erro ao inserir evento: " + error);
    }
  }

  static async buscar(filtro = {}) {
    try {
      const { db, client } = await connect();
      const eventos = await db.collection("eventos").find(filtro).toArray();
      console.log("Eventos encontrados:", eventos);
      client.close();
      return eventos;
    } catch (error) {
      Logger.log("Erro ao buscar eventos: " + error);
    }
  }

  static async atualizar(filtro, novosDados) {
    try {
      const { db, client } = await connect();
      const result = await db.collection("eventos").updateMany(filtro, {
        $set: novosDados,
      });
      console.log("Eventos atualizados:", result.modifiedCount);
      client.close();
    } catch (error) {
      Logger.log("Erro ao atualizar eventos: " + error);
    }
  }

  static async deletar(filtro) {
    try {
      const { db, client } = await connect();
      const result = await db.collection("eventos").deleteMany(filtro);
      console.log("Eventos deletados:", result.deletedCount);
      client.close();
    } catch (error) {
      Logger.log("Erro ao deletar eventos: " + error);
    }
  }
}

module.exports = Evento;