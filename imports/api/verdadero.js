export const Verdaderos = new Mongo.Collection('verdaderos');

let Schema = {};

Schema.verdadero = new SimpleSchema({

pregunta: {
    type: String
},
Respuesta: {
    type: Boolean
}

});