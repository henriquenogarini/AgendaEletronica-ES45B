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
      console.log("Usuário inserido:", result.insertedId);
      client.close();
    } catch (error) {
      Logger.log("Erro ao inserir usuário:", + error);
    }
  }
}

module.exports = Usuario;