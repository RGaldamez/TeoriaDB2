export const Estudiantes = new Mongo.Collection('estudiantes');

let Schema = {};


Schema.estudiante = new SimpleSchema({

    Nombre: {
        type: String
    },
    Nota:{
        type: Number
    }

});
