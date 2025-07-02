const readline = require("readline");
const Evento = require("../../models/evento");
const Logger = require("../../utils/logger");

async function inserirEventoInterativo(rl, callback) {
  function repetirCampos() {
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
                try {
                  await evento.inserir();
                  callback();
                } catch (error) {
                  Logger.logError("Erro ao inserir evento: " + error.message);
                  console.log("Dados inválidos. Tente novamente.\n");
                  repetirCampos(); 
                }
              });
            });
          });
        });
      });
    });
  }
  repetirCampos();
}

async function buscarEventos() {
  try {
    await Evento.buscar();
  } catch (error) {
    Logger.logError("Erro ao buscar eventos: " + error.message);
  }
}

async function atualizarEventoInterativo(rl, callback) {
  rl.question("Título atual do evento: ", (tituloAtual) => {
    rl.question("Novo título: ", (novoTitulo) => {
      rl.question("Nova descrição: ", (descricao) => {
        rl.question("Nova categoria (nome): ", (categoriaId) => {
          rl.question("Novo usuário (nome): ", (usuarioId) => {
            rl.question("Nova data de início (YYYY/MM/DDTHH:MM:SS): ", (dataInicio) => {
              rl.question("Nova data de fim (YYYY/MM/DDTHH:MM:SS): ", async (dataFim) => {
                try {
                  await Evento.atualizar(
                    { titulo: tituloAtual },
                    {
                      titulo: novoTitulo,
                      descricao,
                      nomeCategoria: categoriaId,
                      nomeUsuario: usuarioId,
                      dataInicio: new Date(dataInicio),
                      dataFim: new Date(dataFim),
                    }
                  );
                } catch (error) {
                  Logger.logError("Erro ao atualizar evento: " + error.message);
                  console.log("Não foi possível atualizar o evento.");
                }
                callback();
              });
            });
          });
        });
      });
    });
  });
}

async function deletarEventoInterativo(rl, callback) {
  rl.question("Título do evento a ser deletado: ", async (titulo) => {
    if (!titulo || titulo.trim() === "") {
      console.log("Título obrigatório. Operação cancelada.");
      Logger.logError("Tentativa de deletar evento sem informar o título.");
      return callback();
    }
    try {
      await Evento.deletar({ titulo });
    } catch (error) {
      Logger.logError("Erro ao deletar evento: " + error.message);
    }
    callback();
  });
}

module.exports = {
  inserirEventoInterativo,
  buscarEventos,
  atualizarEventoInterativo,
  deletarEventoInterativo
};