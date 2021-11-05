/* Archivo encargado de la conexión de la base datos */
//Modulo interno - Mongoose
const mongoose = require("mongoose");
//Logger
const log = require('./utils/logger');
//Conexión de la base de datos
mongoose
  .connect("mongodb://127.0.0.1:27017/proyectoMEAN-1")
  .then(() => {
    log.info("Database running.");
  })
  .catch((err) => {
    log.error("Error trying to run database: ", err);
  });
//Exportar conexión y configuración de la base de datos
module.exports = mongoose;