import { Schema, model } from 'mongoose'

const PeliculaShema = new Schema({
    nombre: String,
    descripcion: String
})

export const Pelicula = model('peliculas', PeliculaShema)