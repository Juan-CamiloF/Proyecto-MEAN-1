/* Archivo encargado de validar la autenticación apartir de un token */
//Modulos internos - JWT
const jwt = require("jsonwebtoken");
//Logger
const log = require("../utils/logger");
//Función para autenticar token
function auth(req, res, next) {
  //Tomar el token de la cabecera
  let header = req.header("Authorization");
  //Separar palabra clave del token
  let token = header.split(" ")[1];
  //Si no existe un token
  if (!token) {
    log.log({ level: "error", message: "Request without token" });
    return res.status(400).send("No hay token de acceso.");
  }
  //Si existe token
  try {
    //Verificar el token
    const payload = jwt.verify(token, "proyectoMEAN-1");
    //En la petición agregar carga útil
    req.usuario = payload;
    next();
  } catch (err) {
    //Si el token no tiene autorización
    log.log({ level: "error", message: "Token without authorization." });
    return res.status(403).send("Token sin autorización");
  }
}
