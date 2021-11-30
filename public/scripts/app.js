// Client facing scripts here

$(document).ready(function() {

  console.log('READY');

<<<<<<< HEAD
  const renderCard = function(cards){
    for (const card of cards) {
      console.log(card);
    }
=======
  //Responsible for rendering list
  const renderCard = function(){

>>>>>>> ec9e0c368f90eaa3876121e25cb03ea220388cc7
  }

  $('#restaurants, #books, #shows, #products').sortable({
    connectWith: '.layout__list'
  }).disableSelection();

<<<<<<< HEAD
  for (const data of dummyData) {
    console.log(data);
  }

  renderCard(dummyData);

=======
>>>>>>> ec9e0c368f90eaa3876121e25cb03ea220388cc7

});
