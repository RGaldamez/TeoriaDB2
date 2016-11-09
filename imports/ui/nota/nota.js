import "./nota.html"
import {Estudiantes} from "../../api/estudiante.js"; 

Template.nota.onCreated(function(){
    Meteor.subscribe("Estudiantes");

});

Template.nota.helpers({
    estudiantes : function(){
        return Estudiantes.find({});
    }

});