// Client facing scripts here
const express = require('express');
const router = express.Router();
// $(document).ready(function() {
    router.get("/new", (req, res) => {
    console.log('READY');
    // db.query(`SELECT id FROM categories where name = $1`, [category])
    db.query(`SELECT id, name FROM tasks WHERE category_id = (SELECT id FROM categories WHERE name= $1);`,['to_eat'])
    .then(data => {
        console.log("print data",data);
    });
    })
    
//     const data = [
//       {
//         'Spiderman':
//         {
//           'category': 'shows'
//         }
//       },
  
//       {
//         'Game of thrones':
//         {
//           'category' : 'books'
//         }
//       },
  
//       {
//         'Mcdonalds':
//         {
//           'category' : 'restaurants'
//         }
//       },
//       {
//         'Iphone 12':
//         {
//           'category' : 'products'
//         }
//       },
//       {
//         'Dick Grayson':
//         {
//           'category' : 'books'
//         }
//       }
//     ]
  
//     const createCards = function(data) {
//       const $shows = $('#shows').attr('id');
//       const $book = $('#books').attr('id');
//       const $restaurant = $('#restaurants').attr('id');
//       const $product = $('#products').attr('id');
  
//       for (const card of data) {
//         for (const title in card) {
//           const $label = $('<label>').text(title);
//           const $card = $('<li>').addClass('card');
//           $card.append($label);
  
//           if ($shows === card[title].category) {
//             $('#shows').append($card)
//           }
//           if ($book === card[title].category) {
//             $('#books').append($card)
//           }
//           if ($restaurant === card[title].category) {
//             $('#restaurants').append($card)
//           }
//           if ($product === card[title].category) {
//             $('#products').append($card)
//           }
  
//         }
//       }
//     }
  
//     createCards(data);
  
//     //function getAllTasks() {
//     //  $.ajax({
//     //    method: 'get',
//     //    url:
//     //  });
//     //}
  
//     $('#restaurants, #books, #shows, #products').sortable({
//       connectWith: '.layout__list'
//     }).disableSelection();
  
//   });
  