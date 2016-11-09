export const Verdaderos = new Mongo.Collection('verdaderos');

let Schema = {};

Schema.verdadero = new SimpleSchema({

    pregunta: {
        type: String
    },
    respuesta: {
        type: Number
    },
    index:{
        type: Number
    }


});