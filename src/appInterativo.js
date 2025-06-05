const readline = require("readline");
const usuarioInterativo = require("./operations/crudInterativo/usuarioInterativo");
const categoriaInterativo = require("./operations/crudInterativo/categoriaInterativo");
const eventoInterativo = require("./operations/crudInterativo/eventoInterativo");


// Cria uma interface de leitura e escrita para interagir com o usuário.
// Usando o módulo readline do Node.js para permitir entrada de dados pelo terminal.
// Isso é útil para criar um menu interativo onde o usuário pode escolher opções e inserir, atualizar, buscar e deletar dados.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log("\n=== MENU PRINCIPAL ===");
  console.log("1 - Inserir usuário");
  console.log("2 - Buscar usuários");
  console.log("3 - Atualizar usuário");
  console.log("4 - Deletar usuário");
  console.log("5 - Inserir categoria");
  console.log("6 - Buscar categorias");
  console.log("7 - Atualizar categoria");
  console.log("8 - Deletar categoria");
  console.log("9 - Inserir evento");
  console.log("10 - Buscar eventos");
  console.log("11 - Atualizar evento");
  console.log("12 - Deletar evento");
  console.log("0 - Sair");
  rl.question("Escolha uma opção: ", async (opcao) => {
    await executarOpcao(opcao);
    if (opcao !== "0") menu();
  });
}

async function executarOpcao(opcao) {
  switch (opcao) {
    case "1":
      await usuarioInterativo.inserirUsuarioInterativo(rl, menu);
      break;
    case "2":
      await usuarioInterativo.buscarUsuarios(rl, menu);
      break;
    case "3":
      await usuarioInterativo.atualizarUsuarioInterativo(rl, menu);
      break;
    case "4":
      await usuarioInterativo.deletarUsuarioInterativo(rl, menu);
      break;
    case "5":
      await categoriaInterativo.inserirCategoriaInterativo(rl, menu);
      break;
    case "6":
      await categoriaInterativo.buscarCategorias(rl, menu);
      break;
    case "7":
      await categoriaInterativo.atualizarCategoriaInterativo(rl, menu);
      break;
    case "8":
      await categoriaInterativo.deletarCategoriaInterativo(rl, menu);
      break;
    case "9":
      await eventoInterativo.inserirEventoInterativo(rl, menu);
      break;
    case "10":
      await eventoInterativo.buscarEventos(rl, menu);
      break;
    case "11":
      await eventoInterativo.atualizarEventoInterativo(rl, menu);
      break;
    case "12":
      await eventoInterativo.deletarEventoInterativo(rl, menu);
      break;
    case "0":
      console.log("Saindo...");
      rl.close();
      break;
    default:
      console.log("Opção inválida.");
  }
}

menu();