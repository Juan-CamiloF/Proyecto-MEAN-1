/* Archivo encargado del arranque del backend */
//Modulos internos
const express = require("express");
const cors = require("cors");
//Modulos creados - Rutas
const user = require('./routes/userRoute');
const auth = require('./routes/authRoute');
//Logger
const log = require('./utils/logger');
//Configuración de la aplicación
const app = express();
app.use(cors());
app.use(express.json());
// Exponer rutas
app.use("/api/user",user)
app.use("/api/auth",auth)
//Base de datos
const { mongoose } = require("./database");
//Puerto
const port = process.env.PORT || 3000;
//Ejecución de la aplicación
app.listen(port, () => {
  log.info("Server on port: "+ port);
});
