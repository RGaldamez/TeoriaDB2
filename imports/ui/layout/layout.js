import "./layout.html"


Template.layout.events({
    'click #logout' (event){
        Meteor.logout();
        Router.go('/');
    }


});