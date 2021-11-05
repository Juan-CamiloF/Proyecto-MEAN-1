/* Archivo encargado de definir las rutas que apuntan los controladores de user */
//Modulos internos
const express = require('express');
const router = express.Router();
//Modulo creados - Controlador
const userController = require("../controllers/userController");
// Rutas
router.post("/",userController.registerUser);
// Exportar rutas
module.exports = router;
