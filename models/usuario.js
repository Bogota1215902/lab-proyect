import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema({
    tipoPersona:{type:String,required:true},
    nombre: {
        type: String,
        required: true
    },
    tipoDocumento:{
        type:String,
        required:true
    },
    documento: {
        type: String,
        required: true,
        unique: true
    },
    direccion: {
        type: String,
        required: true
    },
    departamento:{
        type: String,
        required: true    
    },
    ciudad:{
        type: String,
        required: true     
    },
    contacto: {
        type:String,
        ref: "Usuario"
    },
    telefono: {
        type: String,
        maxLength: 14,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        unique: true
    },
    rol:    {
        type: String,
        default:"Cliente"
    },
    estado: {
        type: Number,//0 inactivo  1:activo   2:vacaciones
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

})

export default mongoose.model('Usuario', UsuarioSchema)