const { connect } = require("../config/db");

class Categoria {
  constructor(nome) {
    this.nome = nome;
  }

  async inserir() {
    try {
      const { db, client } = await connect();
      const result = await db.collection("categorias").insertOne({
        nome: this.nome
      });
      console.log("Categoria inserida:", result.insertedId);
      client.close();
    } catch (e) {
      console.log("Erro ao inserir categoria:", e);
    }
  }

  static async inserirCategoriasPadrao() {
    const categorias = ["Saúde", "Esporte", "Estudos", "Trabalho", "Lazer"];
    try {
      const { db, client } = await connect();
      for (const nome of categorias) {
        await db.collection("categorias").insertOne({ nome });
        console.log("Categoria inserida:", nome);
      }
      client.close();
    } catch (e) {
      console.log("Erro ao inserir categorias padrão:", e);
    }
  }
}

module.exports = Categoria;
