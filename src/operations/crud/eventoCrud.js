const Evento = require("../../models/evento");
const Logger = require("../../utils/logger");

async function inserirEvento() {
  try {
    const evento = new Evento(
      "Consulta Médica",
      "Check-up anual",
      "Saúde",                // nome da categoria
      "Henrique Nogarini",    // nome do usuário
      new Date("2025-06-05T10:00:00"), // data início
      new Date("2025-06-05T11:00:00")  // data fim
    );
    await evento.inserir();
  } catch (error) {
    Logger.logError("Erro ao inserir evento: " + error.message);
  }
}

async function buscarEventos() {
  try {
    await Evento.buscar();
  } catch (error) {
    Logger.logError("Erro ao buscar eventos: " + error.message);
  }
}

async function atualizarEvento() {
  try {
    const filtro = { titulo: "Consulta Médica" };

    const novosDados = {
      titulo: "Consulta Oftalmológica",
      descricao: "Exame de vista completo",
      nomeCategoria: "Saúde",
      nomeUsuario: "Henrique Nogarini",
      dataInicio: new Date("2025-06-06T09:00:00"),
      dataFim: new Date("2025-06-06T10:00:00"),
    };

    await Evento.atualizar(filtro, novosDados);
  } catch (error) {
    Logger.logError("Erro ao atualizar evento: " + error.message);
  }
}

async function deletarEvento() {
  try {
    await Evento.deletar({ titulo: "Consulta Oftalmológica" });
  } catch (error) {
    Logger.logError("Erro ao deletar evento: " + error.message);
  }
}

module.exports = {
  inserirEvento,
  buscarEventos,
  atualizarEvento,
  deletarEvento,
};