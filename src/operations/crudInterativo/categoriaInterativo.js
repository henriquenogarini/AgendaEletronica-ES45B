const readline = require("readline");
const Categoria = require("../../models/categoria");

async function inserirCategoriaInterativo(rl, callback) {
  rl.question("Digite o nome da categoria: ", async (nome) => {
    const categoria = new Categoria(nome);
    await categoria.inserir();
    callback();
  });
}

async function buscarCategorias() {
  await Categoria.buscar();
}

async function atualizarCategoriaInterativo(rl, callback) {
  rl.question("Nome da categoria a ser atualizada: ", (nomeAntigo) => {
    rl.question("Novo nome: ", async (nomeNovo) => {
      await Categoria.atualizar({ nome: nomeAntigo }, { nome: nomeNovo });
      callback();
    });
  });
}

async function deletarCategoriaInterativo(rl, callback) {
  rl.question("Nome da categoria a ser deletada: ", async (nome) => {
    await Categoria.deletar({ nome });
    callback();
  });
}

module.exports = {
  inserirCategoriaInterativo,
  buscarCategorias,
  atualizarCategoriaInterativo,
  deletarCategoriaInterativo
};

