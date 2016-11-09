export const Estudiantes = new Mongo.Collection('estudiantes');

let Schema = {};


Schema.estudiante = new SimpleSchema({

    nombre: {
        type: String
    },
    nota:{
        type: Number
    }

});
