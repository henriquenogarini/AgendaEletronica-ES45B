const Evento = require("../../models/evento");

async function inserirEvento() {
  const evento = new Evento(
    "Consulta Médica",
    "Check-up anual",
    "Saúde",                // nome da categoria
    "Henrique Nogarini",    // nome do usuário
    new Date("2025-06-05T10:00:00"),//Data deve seguir o formato americano (YYYY-MM-DDTHH:MM:SS)
    new Date("2025-06-05T11:00:00") 
  );
  await evento.inserir();
}

async function buscarEventos() {
  await Evento.buscar();
}

async function atualizarEvento() {
  await Evento.atualizar(
    { titulo: "Consulta Médica" },
    { descricao: "Check-up geral atualizado" }
  );
}

async function deletarEvento() {
  await Evento.deletar({ titulo: "Consulta Médica" });
}

module.exports = {
  inserirEvento,
  buscarEventos,
  atualizarEvento,
  deletarEvento,
};