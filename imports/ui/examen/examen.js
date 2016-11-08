import "./examen.html";
import {Selecciones} from "../../api/seleccion.js";
import {Verdaderos} from "../../api/verdadero.js"; 
//import {Random} from 'meteor/'

Template.examen.helpers({
    /*
    verdaderos:function(){
        return Verdaderos.find({});
    },
    selecciones:function(){
        return Selecciones.find({});
    },
    */
    /*
    sizeVerdaderos:function(){
        return Verdaderos.count();
    },
    sizeSelecciones:function(){
        return Selecciones.count();
    },
    */
    preguntasSeleccion: function(){
        return Selecciones.findOne( {index: Math.floor( (Selecciones.count()-1)*Math.random())});
    },
    preguntasVerdadero: function(){
        return Verdaderos.findOne( {index: Math.floor( (Verdaderos.count()-1)*Math.random())});
    }
});







