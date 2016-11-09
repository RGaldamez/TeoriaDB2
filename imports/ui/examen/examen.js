import "./examen.html";
import {Selecciones} from "../../api/seleccion.js";
import {Verdaderos} from "../../api/verdadero.js";
import {Estudiantes} from "../../api/estudiante.js"; 

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
    this.answersVerdaderos1 = 0;
    this.answersVerdaderos2 = 0;
    this.answersVerdaderos3 = 0; 
    this.answersVerdaderos4 = 0;
    this.answersVerdaderos5 = 0;
    this.notaFinal = 0;
    Meteor.subscribe("Verdaderos");
    Meteor.subscribe("Selecciones");
    Meteor.subscribe("Estudiantes");
    



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
    grade:function(){
        return Template.instance().notaFinal;
    },

    preguntaSeleccion1: function(){        
        var random = Math.floor( Math.random() * (Selecciones.find({}).count()+1));
        try {
            var Doc = Selecciones.find().fetch()[random];
            Template.instance().answersSeleccion1=Doc.respuesta; 
            console.log(Doc.respuesta);    
        } catch (TypeError) {
            
        }
        
        

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
        
        

        return Selecciones.find({index:random});
    },
    
    preguntaVerdadero1: function(){
        var random = Math.floor( Math.random() * (Verdaderos.find({}).count()+1));
        try {
            var Doc = Verdaderos.find().fetch()[random]; 
            Template.instance().answersVerdaderos1 = Doc.respuesta;   
            
        } catch (TypeError) {
             
        }
        return Verdaderos.find({index:random});
    },
    preguntaVerdadero2: function(){
        var random = Math.floor( Math.random() * (Verdaderos.find({}).count()+1));
        try {
            var Doc = Verdaderos.find().fetch()[random]; 
            Template.instance().answersVerdaderos2 = Doc.respuesta;   
        } catch (TypeError) {
             
        }
        return Verdaderos.find({index:random});
    },
    preguntaVerdadero3: function(){
        var random = Math.floor( Math.random() * (Verdaderos.find({}).count()+1));
        try {
            var Doc = Verdaderos.find().fetch()[random]; 
            Template.instance().answersVerdaderos3 = Doc.respuesta;   
        } catch (TypeError) {
             
        }
        return Verdaderos.find({index:random});
    },
    preguntaVerdadero4: function(){
        var random = Math.floor( Math.random() * (Verdaderos.find({}).count()+1));
        try {
            var Doc = Verdaderos.find().fetch()[random]; 
            Template.instance().answersVerdaderos4 = Doc.respuesta;   
        } catch (TypeError) {
             
        }
        return Verdaderos.find({index:random});
    },
    preguntaVerdadero5: function(){
        var random = Math.floor( Math.random() * (Verdaderos.find({}).count()+1));
        try {
            var Doc = Verdaderos.find().fetch()[random]; 
            Template.instance().answersVerdaderos5 = Doc.respuesta;   
        } catch (TypeError) {
             
        }
        return Verdaderos.find({index:random});
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

Template.examen.events({
    'click #finalizar'(event){
        var a1 =$('input:radio[name="group1"]:checked').val();
        var a2 =$('input:radio[name="group2"]:checked').val();
        var a3 =$('input:radio[name="group3"]:checked').val();
        var a4 =$('input:radio[name="group4"]:checked').val();
        var a5 =$('input:radio[name="group5"]:checked').val();
        var a6 =$('input:radio[name="group6"]:checked').val();
        var a7 =$('input:radio[name="group7"]:checked').val();
        var a8 =$('input:radio[name="group8"]:checked').val();
        var a9 =$('input:radio[name="group9"]:checked').val();
        var a10 =$('input:radio[name="group10"]:checked').val();

        var grades = 0;

        if( parseInt(a1) == Template.instance().answersSeleccion1 && a1 !=undefined ){
            grades = grades + 1;
            
        }
        if(parseInt(a2) == Template.instance().answersSeleccion2 && a2 !=undefined){
            grades = grades + 1;
            
        }
        if(parseInt(a3) == Template.instance().answersSeleccion3 && a3 !=undefined){
            grades = grades + 1;
            
        }
        if(parseInt(a4) == Template.instance().answersSeleccion4 && a4 !=undefined){
            grades = grades + 1;
            
        }
        if(parseInt(a5) == Template.instance().answersSeleccion5 && a5 !=undefined){
            grades = grades + 1;
            
        }
        if(parseInt(a6) == Template.instance().answersVerdaderos1 && a6 !=undefined){
            grades = grades + 1;
            
        }
        if(parseInt(a7) == Template.instance().answersVerdaderos2 && a7 !=undefined){
            grades = grades + 1;
            
        }
        if(parseInt(a8) == Template.instance().answersVerdaderos3 && a8 !=undefined){
            grades = grades + 1;
            
        }
        if(parseInt(a9) == Template.instance().answersVerdaderos4 && a9 !=undefined){
            grades = grades + 1;
            
        }
        if(parseInt(a10) == Template.instance().answersVerdaderos5 && a10 !=undefined){
            grades = grades + 1;
            
        }
        var nombre = $("#nombreEstudiante").val();
        alert("Nombre: " + nombre);
        alert("Nota: "+ grades);
        var nota = grades;

        /*Meteor.call("insertEstudiante", {nombre,grades},function(err,res){
            if(err){
                console.log(err);
            }
        });*/
        Estudiantes.insert({nombre,nota});
    }

});







