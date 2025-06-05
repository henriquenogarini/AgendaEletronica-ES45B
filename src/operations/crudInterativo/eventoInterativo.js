const readline = require("readline");
const Evento = require("../../models/evento");

async function inserirEventoInterativo(rl, callback) {
  rl.question("Título do evento: ", (titulo) => {
    rl.question("Descrição: ", (descricao) => {
      rl.question("Categoria (nome): ", (categoriaId) => {
        rl.question("Usuário (nome): ", (usuarioId) => {
          rl.question("Data de início (YYYY/MM/DDTHH:MM:SS): ", (dataInicio) => {
            rl.question("Data de fim (YYYY/MM/DDTHH:MM:SS): ", async (dataFim) => {
              const evento = new Evento(
                titulo,
                descricao,
                categoriaId,
                usuarioId,
                new Date(dataInicio),
                new Date(dataFim)
              );
              await evento.inserir();
              callback();
            });
          });
        });
      });
    });
  });
}

async function buscarEventos() {
  await Evento.buscar();
}

async function atualizarEventoInterativo(rl, callback) {
  rl.question("Título atual do evento: ", (tituloAtual) => {
    rl.question("Novo título: ", async (novoTitulo) => {
      await Evento.atualizar({ titulo: tituloAtual }, { titulo: novoTitulo });
      callback();
    });
  });
}

async function deletarEventoInterativo(rl, callback) {
  rl.question("Título do evento a ser deletado: ", async (titulo) => {
    await Evento.deletar({ titulo });
    callback();
  });
}

module.exports = {
  inserirEventoInterativo,
  buscarEventos,
  atualizarEventoInterativo,
  deletarEventoInterativo
};