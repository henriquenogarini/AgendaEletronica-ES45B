const fs = require('fs');

class Logger {
  static logError(error) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ERROR: ${error}\n`;
    fs.appendFileSync("log.txt", logMessage);
  }
}

module.exports = Logger;