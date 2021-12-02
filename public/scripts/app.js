// Client facing scripts here

$(document).ready(function() {

  console.log('READY');


  const data = [
    {
      'Spiderman':
      {
        'id' : 1,
        'category': 'shows'
      }
    },

    {
      'Game of thrones':
      {
        'id' : 2,
        'category' : 'books'
      }
    },

    {
      'Mcdonalds':
      {
        'id' : 3,
        'category' : 'restaurants'
      }
    },
    {
      'Iphone 12':
      {
        'id' : 4,
        'category' : 'products'
      }
    },
    {
      'Dick Grayson':
      {
        'id' : 5,
        'category' : 'books'
      }
    }
  ]

  const createCards = function(data) {
    const $shows = $('#shows').attr('id');
    const $book = $('#books').attr('id');
    const $restaurant = $('#restaurants').attr('id');
    const $product = $('#products').attr('id');

    for (const card of data) {
      for (const title in card) {
        const $label = $('<label>').text(title);
        const $card = $('<li>').addClass('card');
        $($card).attr( "id", card[title]['id'] )
        $card.append($label);

        if ($shows === card[title].category) {
          $('#shows').append($card)
        }
        if ($book === card[title].category) {
          $('#books').append($card)
        }
        if ($restaurant === card[title].category) {
          $('#restaurants').append($card)
        }
        if ($product === card[title].category) {
          $('#products').append($card)
        }

      }
    }
  }

  createCards(data);

  //function getAllTasks() {
  //  $.ajax({
  //    method: 'get',
  //    url:
  //  });
  //}

  $('#restaurants, #books, #shows, #products').sortable({
    connectWith: '.layout__list'
  }).disableSelection();

});
