import { Meteor } from 'meteor/meteor';
import { Selecciones } from '../imports/api/seleccion.js'; 
import { Verdaderos } from '../imports/api/verdadero.js';

Meteor.startup(() => {
  // code to run on server at startup
  //Selecciones.remove({});
  //Verdaderos.remove({});
  Meteor.publish("Verdaderos", function(){
    return Verdaderos.find({});
  });
  Meteor.publish("Selecciones", function(){
    return Selecciones.find({});
  });
  Meteor.methods({
    "insertVerdadero"({pregunta,respuesta,index}){
      Verdaderos.insert({pregunta,respuesta,index});
    },
    "insertSeleccion"({pregunta,opcion1,opcion2,opcion3,opcion4,respuesta,index}){
      Selecciones.insert({pregunta,opcion1,opcion2,opcion3,opcion4,respuesta,index});
    }
  });


  
});
