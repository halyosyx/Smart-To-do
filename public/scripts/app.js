// Client facing scripts here

$(document).ready(function() {

  console.log('READY');

  //Responsible for rendering list
  const renderCard = function(){

  }

  $('#restaurants, #books, #shows, #products').sortable({
    connectWith: '.layout__list'
  }).disableSelection();


});
