import "./examen.html";
import {Selecciones} from "../../api/seleccion.js";
import {Verdaderos} from "../../api/verdadero.js"; 

//import {Random} from 'meteor/'

Template.examen.onCreated(function(){
    this.posSeleccion = 0;
    this.posVerdadero = 0;
    this.answersSeleccion = [0,0,0,0,0];
   // seleccionEscogida = [0,0,0,0,0,0,0,0,0,0];
    //verdaderoEscogido = [0,0,0,0,0,0,0,0,0,0];
    this.answersVerdaderos = [false,false,false,false,false];
    Meteor.subscribe("Verdaderos");
    Meteor.subscribe("Selecciones");



});

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
    preguntaSeleccion: function(){
        //var random = Math.floor( (Selecciones.find().count()-1)*Math.random());
        //Math.random() * (max - min + 1)) + min;
        var random = Math.floor( Math.random() * (Selecciones.find({}).count()+1));
        
        
         
        
        //var query = Selecciones.findOne({index:random});
        //query.select('respuesta');
        /*query.exec(function(err,seleccion){
            if(err)return handleError(err);
          Template.instance().answersSeleccion[Template.instance().posSeleccion] = seleccion.respuesta;  
        });
        */

        //Template.instance().answersSeleccion[Template.instance().posSeleccion] = Selecciones.find({index:random},{respuesta:1, _id:0});
        //var temp  = Selecciones.find({index:random},{respuesta:1, _id:0});
        //var temp2 = temp.toArray();
        //var temp3 = temp2[1];
        //alert(temp3);

        //var array = myDocument.split();
        //alert(array[1]);
        var myDocument = Selecciones.find().fetch()[random];
        console.log(myDocument.respuesta);
        
        Template.instance().posSeleccion = Template.instance().posSeleccion+1;
        //alert(Template.instance().posSeleccion);

        return Selecciones.find({index:random});
    },
    preguntaVerdadero: function(){
        var random = Math.floor( (Verdaderos.find().count()-1)*Math.random())
        
        //Template.instance().answersVerdaderos[Template.instance().posVerdadero] = Verdaderos.findOne( {index:random }).respuesta;
        //Template.instance().posVerdadero = Template.instance().posVerdadero+1;
        //return Verdaderos.findOne( {index:random });
    },
    changeAnswer:function(respuesta){
        alert(respuesta);
    }
    /*,

    opcion:function(numPregunta,numOpcion){
        var realSelectionIndex = Template.instance().seleccionEscogida[numPregunta];
        //var realSelection = Selecciones.findOne({index:realSelectionIndex});
        if(numOpcion === 1){
            return Selecciones.findOne({index:realSelectionIndex}).opcion1;
        }else if (numOpcion ===2 ){
            return Selecciones.findOne({index:realSelectionIndex}).opcion2;
        }else if(numOpcion ===3 ){
            return Selecciones.findOne({index:realSelectionIndex}).opcion3;
        }else if(numOpcion ===4 ){
            return Selecciones.findOne({index:realSelectionIndex}).opcion4;
        }
    }
    */
});







