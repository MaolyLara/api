import { Schema } from 'mongoose'
import mongoose from "mongoose";

const UserModel = new Schema({
    nome: String,
    email: String,
    senha: String,
    dataNacimento: Number,
    endereco: String

},
{
  timestamps: true

})

export default mongoose.model('User', UserModel)