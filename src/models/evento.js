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
      if (!this.titulo || !this.descricao || !this.nomeCategoria || !this.nomeUsuario || !this.dataInicio || !this.dataFim) {
        throw new Error("Todos os campos são obrigatórios para inserir um evento.");
      }
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
      Logger.logError("Erro ao inserir evento: " + error.message);
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
      Logger.logError("Erro ao buscar eventos: " + error.message);
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
      const result = await db.collection("eventos").updateMany(filtro, {
        $set: novosDados
      });
      console.log("Eventos atualizados com sucesso:", result.modifiedCount);
      client.close();
    } catch (error) {
      Logger.logError("Erro ao atualizar eventos: " + error.message);
    }
  }

  static async deletar(filtro) {
    try {
      if (!filtro || Object.keys(filtro).length === 0) {
        throw new Error("Filtro obrigatório para deletar eventos.");
      }
      const { db, client } = await connect();
      const result = await db.collection("eventos").deleteMany(filtro);
      console.log("Eventos deletados com sucesso:", result.deletedCount);
      client.close();
    } catch (error) {
      Logger.logError("Erro ao deletar eventos: " + error.message);
    }
  }
}

module.exports = Evento;

