/* Archivo encargado de hacer la configuración para los logs de la aplicación */
//Modulo interno - Winston
const { createLogger, format, transports } = require("winston");
const winston = require("winston");

winston.addColors({
  error: "red",
  warn: "yellow",
  info: "cyan",
  debug: "green",
});
//Creación de logger
const log = createLogger({
  transports: [
    new transports.Console({
      level: "debug",
      format: format.combine(
        format.simple(),
        format.colorize(),
        format.printf((info) => `[${new Date()}] ${info.level} ${info.message}`)
      ),
    }),
    new transports.File({
      maxsize: 5120000,
      maxFiles: 5,
      filename: `${__dirname}/logs-api.log`,
      format: format.combine(
        format.simple(),
        format.printf((info) => `[${new Date()}] ${info.level} ${info.message}`)
      ),
    }),
  ],
});


module.exports = log;
