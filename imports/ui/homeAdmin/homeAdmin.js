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


Template.homeAdmin.events({
    "change #opcionCorrecta": function (event, template) {
        //Template.instance().color.get();
        Template.instance().answer.set($(event.currentTarget).val());
        
        
    },
    'click #addVerdadero'(event){
       Verdaderos.insert({
           pregunta: $("#PreguntaVerdadero").val(),
           respuesta: true
       });
       event.preventDefault();
       $("#PreguntaVerdadero").val("");
       Materialize.toast('Pregunta Agregada (True)');
       
    },
    'click #addFalso'(event){
        Verdaderos.insert({
            pregunta: $("#PreguntaVerdadero"),
            respuesta: false
        });
        event.preventDefault();
        $("#PreguntaVerdadero").val("");
        Materialize.toast('Pregunta Agregada (False)');
        
    },
    'click #agregarSeleccion'(event){
        Selecciones.insert({
            pregunta: $("#seleccionPregunta").val(),
            opcion1:$("#seleccionOpcion1").val(),
            opcion2:$("#seleccionOpcion2").val(),
            opcion3:$("#seleccionOpcion3").val(),
            opcion4:$("#seleccionOpcion4").val(),
            respuesta: Template.instance().answer.get()
        });
        alert(Template.instance().answer.get()); 
        event.preventDefault();
        $("#seleccionPregunta").val("");
        $("#seleccionOpcion1").val("");
        $("#seleccionOpcion2").val("");
        $("#seleccionOpcion3").val("");
        $("#seleccionOpcion4").val("");
    }
    

});