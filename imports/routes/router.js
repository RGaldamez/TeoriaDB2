import {Router} from "meteor/iron:router";

import "../ui/frontpage/frontpage.js";
import "../ui/examen/examen.js";
import "../ui/homeAdmin/homeAdmin.js";
import "../ui/login/login.js";
import "../ui/navbar/navbar.js";
import "../ui/nota/nota.js";


Router.route('/', function(){
    this.render("frontpage");
});

Router.route('examen',function(){
    this.render("examen");
});

Router.route('homeAdmin', function(){
    this.render("homeAdmin");
});

Router.route('login', function(){
    this.render("login");
});

Router.route('nota', function(){
    this.render("nota");
});