// Client facing scripts here

$(document).ready(function() {

  console.log('READY');

  const renderCard = function(cards){
    for (const card of cards) {
      console.log(card);
    }
  }

  $('#restaurants, #books, #shows, #products').sortable({
    connectWith: '.layout__list'
  }).disableSelection();

  for (const data of dummyData) {
    console.log(data);
  }

  renderCard(dummyData);


});
