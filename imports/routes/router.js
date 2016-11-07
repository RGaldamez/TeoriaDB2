import {Router} from "meteor/iron:router";

import "../ui/frontpage/frontpage.js";
import "../ui/home/home.js";
import "../ui/homeAdmin/homeAdmin.js";
import "../ui/login/login.js";
import "../ui/navbar/navbar.js";


Router.route('/', function(){
    this.render("frontpage");
});

Router.route('home',function(){
    this.render("home");
});

Router.route('homeAdmin', function(){
    this.render("homeAdmin");
});

Router.route('login', function(){
    this.render("login");
})