import "./examen.html";
import {Selecciones} from "../../api/seleccion.js";
import {Verdaderos} from "../../api/verdadero.js"; 

//import {Random} from 'meteor/'

Template.examen.onCreated(function(){
    this.posSeleccion = 0;
    this.posVerdadero = 0;
    this.answersSeleccion1 = 0;
    this.answersSeleccion2 = 0;
    this.answersSeleccion3 = 0;
    this.answersSeleccion4 = 0;
    this.answersSeleccion5 = 0;
   // seleccionEscogida = [0,0,0,0,0,0,0,0,0,0];
    //verdaderoEscogido = [0,0,0,0,0,0,0,0,0,0];
    this.answersVerdaderos1 = false;
    this.answersVerdaderos2 = false;
    this.answersVerdaderos3 = false; 
    this.answersVerdaderos4 = false;
    this.answersVerdaderos5 = false;
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
    preguntaSeleccion1: function(){        
        var random = Math.floor( Math.random() * (Selecciones.find({}).count()+1));
        try {
            var Doc = Selecciones.find().fetch()[random];
            Template.instance().answersSeleccion1=Doc.respuesta; 
            console.log(Doc.respuesta);    
        } catch (TypeError) {
            
        }
        
        Template.instance().posSeleccion = Template.instance().posSeleccion+1;

        return Selecciones.find({index:random});
    },
    preguntaSeleccion2: function(){        
        var random = Math.floor( Math.random() * (Selecciones.find({}).count()+1));
        try {
            var Doc = Selecciones.find().fetch()[random];
            Template.instance().answersSeleccion2=Doc.respuesta; 
            console.log(Doc.respuesta);    
        } catch (TypeError) {
            
        }
        
        Template.instance().posSeleccion = Template.instance().posSeleccion+1;

        return Selecciones.find({index:random});
    },
    preguntaSeleccion3: function(){        
        var random = Math.floor( Math.random() * (Selecciones.find({}).count()+1));
        try {
            var Doc = Selecciones.find().fetch()[random];
            Template.instance().answersSeleccion3=Doc.respuesta; 
            console.log(Doc.respuesta);    
        } catch (TypeError) {
            
        }
        
        Template.instance().posSeleccion = Template.instance().posSeleccion+1;

        return Selecciones.find({index:random});
    },
    preguntaSeleccion4: function(){        
        var random = Math.floor( Math.random() * (Selecciones.find({}).count()+1));
        try {
            var Doc = Selecciones.find().fetch()[random];
            Template.instance().answersSeleccion4=Doc.respuesta; 
            console.log(Doc.respuesta);    
        } catch (TypeError) {
            
        }
        
        Template.instance().posSeleccion = Template.instance().posSeleccion+1;

        return Selecciones.find({index:random});
    },
    preguntaSeleccion5: function(){        
        var random = Math.floor( Math.random() * (Selecciones.find({}).count()+1));
        try {
            var Doc = Selecciones.find().fetch()[random];
            Template.instance().answersSeleccion5=Doc.respuesta; 
            console.log(Doc.respuesta);    
        } catch (TypeError) {
            
        }
        
        Template.instance().posSeleccion = Template.instance().posSeleccion+1;

        return Selecciones.find({index:random});
    },
    
    preguntaVerdadero1: function(){
        var random = Math.floor( Math.random() * (Verdaderos.find({}).count()+1));

        var Doc = Verdaderos.find().fetch()[random]; 
        Template.instance().answersVerdaderos1 = Doc.respuesta;
        return Verdaderos.find({index:random});
    },
    preguntaVerdadero2: function(){
        var random = Math.floor( Math.random() * (Verdaderos.find({}).count()+1));

        var Doc = Verdaderos.find().fetch()[random]; 
        Template.instance().answersVerdaderos2 = Doc.respuesta;
        return Verdaderos.find({index:random});
    },
    preguntaVerdadero3: function(){
        var random = Math.floor( Math.random() * (Verdaderos.find({}).count()+1));

        var Doc = Verdaderos.find().fetch()[random]; 
        Template.instance().answersVerdaderos3 = Doc.respuesta;
        return Verdaderos.find({index:random});
    },
    preguntaVerdadero4: function(){
        var random = Math.floor( Math.random() * (Verdaderos.find({}).count()+1));

        var Doc = Verdaderos.find().fetch()[random]; 
        Template.instance().answersVerdaderos4 = Doc.respuesta;
        return Verdaderos.find({index:random});
    },
    preguntaVerdadero5: function(){
        var random = Math.floor( Math.random() * (Verdaderos.find({}).count()+1));

        var Doc = Verdaderos.find().fetch()[random]; 
        Template.instance().answersVerdaderos5 = Doc.respuesta;
        return Verdaderos.find({index:random});
    },
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







