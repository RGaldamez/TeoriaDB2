export const Selecciones = new Mongo.Collection('selecciones');

let Schema = {};


Schema.seleccion = new SimpleSchema({

    pregunta: {
        type: String
    },
    opcion1:{
        type: String
    },
    opcion2:{
        type: String
    },
    opcion3:{
        type: String
    },
    opcion4:{
        type: String
    },
    respuesta:{
        type: Number
    },
    index:{
        type: Number
    }

});
