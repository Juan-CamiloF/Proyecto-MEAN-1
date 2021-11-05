/* Archivo encargado de definir el modelo para los usuario en DB */
//Modulos internos - Mongoose y jwt
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
//Creación del esquema
const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  email: { type: String, required: true , unique:true },
  password: { type: String, required: true },
});
//Crear función para crear jwt con información del usuario
UserSchema.methods.generateJWT = function() {
    return jwt.sign({
        _id:this._id,
        name:this._id
    },"proyectoMEAN-1",{
        expiresIn:'1d'
    })
}
//Crear el modelo para la base de datos con el nombre  users
const User = mongoose.model("user",UserSchema);
//Exportación
module.exports.User = User;