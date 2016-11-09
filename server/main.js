import { Meteor } from 'meteor/meteor';
import { Selecciones } from '../imports/api/seleccion.js'; 
import { Verdaderos } from '../imports/api/verdadero.js';
import { Estudiantes } from '../imports/api/estudiante.js';

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
  Meteor.publish("Estudiantes", function(){
    return Estudiantes.find({});
  });
  Meteor.methods({
    "insertVerdadero"({pregunta,respuesta,index}){
      Verdaderos.insert({pregunta,respuesta,index});
    },
    "insertSeleccion"({pregunta,opcion1,opcion2,opcion3,opcion4,respuesta,index}){
      Selecciones.insert({pregunta,opcion1,opcion2,opcion3,opcion4,respuesta,index});
    },
    "insertEstudiante"({nombre,nota}){
      Estudiantes.insert({nombre,nota});
    }
  });


  
});
