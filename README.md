# 📆 Projeto 01 — Agenda Eletrônica

Este repositório contém o **Projeto 01** da disciplina **Desenvolvimento Web Back-End (ES45B)** da UTFPR, ministrada pela Professora **Monique Emídio de Oliveira**.

---

## 📚 Descrição

O projeto consiste no desenvolvimento de uma aplicação **Node.js (sem frameworks como Express)** com acesso ao **banco de dados MongoDB**, implementando uma **Agenda Eletrônica** para gerenciamento de:

- 👤 Usuários
- 📂 Categorias
- 📅 Eventos

O sistema permite **inserir, buscar, atualizar e deletar** registros diretamente no banco, utilizando a **interface de linha de comando (CLI)** com menus interativos via `readline`.

---

## 🗂️ Estrutura do Projeto

```bash
AgendaEletronica/
├── src/
│   ├── app.js                 # Script principal de teste com execuções diretas
│   ├── appInterativo.js       # Script com menu interativo via terminal
│   ├── config/
│   │   └── db.js              # Configuração da conexão com MongoDB
│   ├── models/
│   │   ├── usuario.js
│   │   ├── categoria.js
│   │   └── evento.js
│   ├── operations/
│   │   ├── usuarioCrud.js
│   │   ├── categoriaCrud.js
│   │   ├── eventoCrud.js
│   │   └── crudInterativo/
│   │       ├── usuarioInterativo.js
│   │       ├── categoriaInterativo.js
│   │       └── eventoInterativo.js
│   └── utils/
│       └── logger.js          # Logger simples de terminal
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Como Executar o Projeto

### 1. Clone o Repositório

```bash
git clone https://github.com/henriquenogarini/AgendaEletronica-ES45B.git
cd AgendaEletronica
```

### 2. Instale as Dependências

Execute o comando na raiz do projeto (fora da pasta `src`):

```bash
npm install
```

> Isso instalará o MongoDB Driver (`mongodb`) e outras dependências listadas em `package.json`.

---

### 3. Configure o MongoDB

### Usar o MongoDB Compass

1. Baixe o [MongoDB Compass](https://www.mongodb.com/try/download/compass)
2. Crie uma nova conexão usando:

```
mongodb://localhost:27017
```

3. Crie um banco de dados com o nome:

```
agendaEletronica
```

4. Não é necessário criar coleções manualmente — elas serão criadas automaticamente ao inserir dados.

---

### 4. Execute a aplicação

#### 🔧 Para rodar comandos de teste direto:

```bash
node src/app.js
```

> Esse arquivo contém comandos fixos de inserção, busca e atualização e deleção.

#### 🧑‍💻 Para usar o menu interativo:

```bash
node src/appInterativo.js
```

> Navegue pelas opções e insira dados pelo terminal.

---

## ✨ Funcionalidades

- [x] Inserir, buscar, atualizar e remover **Usuários**
- [x] Inserir, buscar, atualizar e remover **Categorias**
- [x] Inserir, buscar, atualizar e remover **Eventos**
- [x] Eventos possuem simulação de relacionamento com Categoria e Usuário (por nome)
- [x] CLI interativa com menu via terminal (readline)
- [x] Organização modular com `models`, `operations` e `crudInterativo`

---

## 🧪 Exemplos de Uso

### Inserir Evento via Menu Interativo

```
Título do evento: Reunião UTFPR
Descrição: Discussão sobre o Projeto 01
Categoria (nome): Faculdade
Usuário (nome): Henrique Nogarini
Data de início (YYYY-MM-DDTHH:MM:SS): 2025-06-10T14:00:00
Data de fim (YYYY-MM-DDTHH:MM:SS): 2025-06-10T15:00:00
```

---

## 🧠 Observações Técnicas

- Datas devem ser passadas em formato **ISO** (YYYY-MM-DDTHH:MM:SS)
- Relacionamentos entre Eventos, Categorias e Usuários são baseados no **nome** (não no `_id`), mesmo o id sendo gerado.
- O driver `mongodb` é utilizado diretamente, sem Mongoose ou Express
- Toda a lógica está organizada em **módulos separados** por responsabilidade

---

## 👥 Integrantes do Grupo

- Henrique Nogarini  RA: 2102374
- Vinicius Campeão   RA: 2465396
- Vinicius Masao     RA: 2209705

---

## 💻 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [MongoDB Driver (mongodb)](https://www.npmjs.com/package/mongodb)
- [MongoDB Compass (GUI para visualização e manipulação de dados)](https://www.mongodb.com/try/download/compass)

---

📝 **Professor(a):** Monique Emídio de Oliveira  
📅 **Disciplina:** Desenvolvimento Web Back-End – ES45B  
🏫 **Curso:** Engenharia de Software — UTFPR
