import "./homeAdmin.html";
import {Selecciones} from "../../api/seleccion.js";
import {Verdaderos} from "../../api/verdadero.js"; 
import { ReactiveVar } from "meteor/reactive-var";

Template.homeAdmin.onRendered(function(){
      
      /*$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'center' // Displays dropdown with edge aligned to the left of button
    }
  );*/
   $('select').material_select();
   this.answer = new ReactiveVar();


});

Template.homeAdmin.onCreated(function(){
    Meteor.subscribe("Selecciones");
    Meteor.subscribe("Verdaderos");
});

/*Template.homeAdmin.helpers({
    emptyV:function(){
        if(Verdaderos.count() == 0){
            return 0;
        }else{
            return Verdaderos.count() -1;
        }
    },
    emptyS:function(){
        if(Selecciones.count() == 0){
            return true;
        }else{
            return false;
        }
    }
});
*/


Template.homeAdmin.events({
    'change #opcionCorrecta': function (event, template) {
        //Template.instance().color.get();
        Template.instance().answer.set($(event.currentTarget).val());
        
        
    },
    'click #addVerdadero'(event){
       
        var pregunta= $("#PreguntaVerdadero").val();
        var respuesta= 1;
        var index=Verdaderos.find().count();
        Meteor.call("insertVerdadero", {pregunta,respuesta,index},function(err,res){
            if(err){
                console.log(err);
            }
        });
       
       event.preventDefault();
       $("#PreguntaVerdadero").val("");
       Materialize.toast('Pregunta Agregada (True)',2000);
       
    },
    'click #addFalso'(event){
        var pregunta= $("#PreguntaVerdadero").val();
        var respuesta= 0;
        var index= Verdaderos.find().count();
        Meteor.call("insertVerdadero",{pregunta,respuesta,index}, function(err,res){
            if(err){
                console.log(err);
            }
        });

        
        event.preventDefault();
        $("#PreguntaVerdadero").val("");
        Materialize.toast('Pregunta Agregada (False)',2000);
        
    },
    'click #agregarSeleccion'(event){
        
            var pregunta= $("#seleccionPregunta").val();
            var opcion1=$("#seleccionOpcion1").val();
            var opcion2=$("#seleccionOpcion2").val();
            var opcion3=$("#seleccionOpcion3").val();
            var opcion4=$("#seleccionOpcion4").val();
            var respuesta= Template.instance().answer.get();
            var index= Selecciones.find().count();
        Meteor.call("insertSeleccion", {pregunta,opcion1,opcion2,opcion3,opcion4,respuesta,index},function(err,res){
            if(err){
                console.log(err);
            }
        });
        Materialize.toast("Pregunta Agregada",2000);
        event.preventDefault();
        $("#seleccionPregunta").val("");
        $("#seleccionOpcion1").val("");
        $("#seleccionOpcion2").val("");
        $("#seleccionOpcion3").val("");
        $("#seleccionOpcion4").val("");
    }
    

});