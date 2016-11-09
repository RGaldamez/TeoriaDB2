import "./login.html";

Template.login.events({

    'click #loginButton'(){
        Meteor.loginWithPassword($("#user_name").val(), $("#user_name_password").val(), function(error){
            if(error){
                Materialize.toast("El correo electrónico y/o contraseña que has introducido son incorrectos.", 4000);
            }else{
                Materialize.toast("Bienvenido", 2000);
                Router.go('/homeAdmin');
            }
            $("#user_name").val(""); 
            $("#user_name_password").val("");
        });
    }

});