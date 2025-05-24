const { connect } = require("./db");

class Evento {
  constructor(titulo, dataInicio, dataFim, usuarioId) {
    this.titulo = titulo;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
    this.usuarioId = usuarioId;
  }

  async inserir() {
    try {
      const { db, client } = await connect();
      const result = await db.collection("eventos").insertOne({
        titulo: this.titulo,
        dataInicio: this.dataInicio,
        dataFim: this.dataFim,
        usuarioId: this.usuarioId
      });
      console.log("Evento inserido:", result.insertedId);
      client.close();
    } catch (e) {
      console.log("Erro ao inserir evento:", e);
    }
  }
}

module.exports = Evento;