const fs = require('fs');

class Logger {
  static logError(mensagem, erro) {
    const log = `[${new Date().toISOString()}] ${mensagem}: ${erro}\n`;
    fs.appendFileSync('log_erros.txt', log);
  }
}

module.exports = Logger;