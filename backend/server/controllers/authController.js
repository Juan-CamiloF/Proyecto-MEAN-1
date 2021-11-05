/* Archivo encarga de la funcionalidad de autenticación de un usuario */
//Modulo interno - Modelo user y bcrypt
const { User } = require("../models/users");
const bcrypt = require("bcrypt");
//Logger
const log = require("../utils/logger");
//Controlador para agregar las función de autenticación
const userController = {};
// -----Función-----
userController.auth = async (req, res) => {
  //Validar si existe el usuario que hizo la petición
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    log.log({ level: "error", message: "The user does not exist." });
    return res.status(400).send("Correo o contraseña incorrectos");
  }
  //Comparar la contraseña
  let passwordCorrect = await bcrypt.compare(req.body.password, user.password);
  if (!passwordCorrect) {
    log.log({ level: "error", message: "Email or password are wrong" });
    return res.status(400).send("Correo o contraseña incorrectos");
  }
  //Generar token y devolverlo
  let jwt = user.generateJWT();
  log.info("Usuario autenticado: " + user.email + "\nJWT: " + jwt);
  return res.status(200).send({ jwt });
};
//Exportar controlador
module.exports = userController;
