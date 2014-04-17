if (Meteor.isClient) {
  Session.setDefault('textAreaContent', "Some text area content that is editable on click");
  
  Template.editable.helpers({
    'textAreaContent': function () {
      return Session.get('textAreaContent');
    }
  });

  Template.editable.rendered = function(){
    $('#textArea.editable').editable({
      placement: "auto top",
      success: function(response, newValue) {
        console.log('set new value to ' + newValue);
        Session.set('textAreaContent', newValue);
    }});

  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
