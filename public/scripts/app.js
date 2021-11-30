// Client facing scripts here

$(document).ready(function() {

  console.log('READY');

  $('#restaurants, #books, #shows, #products').sortable({
    connectWith: '.layout__list'
  }).disableSelection();

});
