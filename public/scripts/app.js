// Client facing scripts here

$(document).ready(function () {
  console.log('READY');
  function clearSections(){
    $('#to_eat ul').html("");
    $('#to_watch ul').html("");
    $('#to_read ul').html("");
    $('#to_buy ul').html("");
  }

  const renderCards = function (data) {
    const $shows = $('#to_watch').attr('id');
    const $book = $('#to_read').attr('id');
    const $restaurant = $('#to_eat').attr('id');
    const $product = $('#to_buy').attr('id');

    for (const title in data) { 
      const $label = $('<label>').text(data[title].task_name);
      const $icon = $('<i>').addClass('far fa-trash-alt').attr('id', 'delete');
      const $card = $('<li>').addClass('card');
      $card.attr("id", data[title].id)
      $card.append($label, $icon);
      // console.log("tiii", title);
      if ($shows === data[title].category_name) {
        $('#to_watch ul').append($card)
      }
      if ($book === data[title].category_name) {
        $('#to_read ul').append($card)
      }
      if ($restaurant === data[title].category_name) {
        $('#to_eat ul').append($card)
      }
      if ($product === data[title].category_name) {
        $('#to_buy ul').append($card)

      }
    }
  }

      const loadCards = function () {
        clearSections();
        $.ajax({
          type: 'GET',
          url: '/tasks/',
          dataType: 'JSON'
        })
          .done(data => {
            renderCards(data);
          })
      }

      loadCards();

      $('.layout__list').sortable({
        connectWith : '.layout__list'
      }).disableSelection();

          const isValid = function () {
       const text = $("#content").first().val();
       // error for no data pass
       if (text === "") {
         $(".error").text("please enter some textÍ");
         $(".error").slideDown("slow");
         // $(".error").show();
         return true;
      }
      if (text.length > 255) {
       $(".error").text("length is to longÍ");
       $(".error").slideDown("slow");
       return true;
       }
     }
     $('#formList').on("submit", function(event){
       event.stopImmediatePropagation();
       event.preventDefault();
   
      if(isValid()){
        return;
      };
       let urlPost = $(this).attr('action');
       let task = $(this).serialize();
       console.log("check task",task);
   
       $.post(urlPost, task, function(){})
       .done(function(){
         $("#formList").trigger("reset");
         $(".error").hide();
         loadCards();
       })
     });
   
     // edit task//////
     $('#popupForm').on("submit", function (event) {
       event.stopImmediatePropagation();
       event.preventDefault();
       let urlPost = $(this).attr('action');
       let task = $('#popupForm').serialize();
       $.ajax({
         type: "PUT",
         url: urlPost,
         data: task,
         success: function () {
           $('#modal').css('display', 'none');
           loadCards();
         }
       });
     });

     $('.layout__section').on('click', '#delete', function(event) {
      event.stopImmediatePropagation();
      event.preventDefault();
      const id_parent = $( this ).parent().attr("id");
      const url = `/tasks/${id_parent}`
      $.ajax({
        url:url, 
        method: "DELETE"
        })
      .done(function(){
        loadCards();
      })
  
      console.log('DELETE');
    })

    });
