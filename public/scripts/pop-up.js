$(document).ready(function() {

  //Shows the popup display
  //This can also handle getting the card information
  $('.card').click(function() {
    $('#modal').css('display', 'block');
  })

  //Clears the popup block
  $('#close').click(function() {
    $('#modal').css('display', 'none');

  })

});
