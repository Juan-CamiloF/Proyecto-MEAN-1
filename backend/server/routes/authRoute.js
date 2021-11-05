/* Archivo encargado de definir la ruta que apuntan al controlador auth*/
// Modulos internos
const express = require('express');
const router = express.Router();
// Modulo creado - Controlador
const userController = require('../controllers/authController');
// Ruta
router.post("/",userController.auth);
// Exportar ruta
module.exports = router;

