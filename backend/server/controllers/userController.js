/* Archivo encargado de crear los funciones relacionadas con los usuarios */
//Modulos internos - Modelo User y bcrypt
const { User } = require("../models/users");
const bcrypt = require("bcrypt");
const log = require("../utils/logger");
//Controlador para agregar las funciones del usuario
const userController = {};
// ------Funciones-----
//Función crear usuarios
userController.registerUser = async (req, res) => {
  //Validar que el usuario no existe
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    log.log({ level: "error", message: "The user is already registered." });
    return res.status(400).send("El usuario ya está registrado.");
  }
  //Incriptación de contraseña
  const hashPassword = await bcrypt.hash(req.body.password, 10);
  user = new User({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    password: hashPassword,
  });
  //Guardar el usuario
  const save = user.save();
  log.info("User create: " + user);
  //Respuesta
  res.status(201).send("Usuario creado de manera exitosa.");
};

//Exportar controlador
module.exports = userController;
