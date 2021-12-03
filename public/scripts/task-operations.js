
$(document).ready(function() {
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
    // alert("in form submit");

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
      
    })
  });
});


  // edit task//////
  // $('#edit-task').on("submit", function(event){
  //   console.log("Editing a Task");
  //   event.preventDefault();
  //   let urlPost = $(this).attr('action');
  //   let task = $(this).serialize();
  //   $.ajax({
  //     type: "PUT",
  //     url : urlPost,
  //     data : task,
  //     success : function(){//need to add function which will render added task to respective category
  //     }
  //   });
  // });

  // //delete the task
  // // WE NEED TO SET id/class OF CARD
  // // IS IT FINE IF WE CALL DIRECT HREF INSTEAD OF AJAX?
  // $('#edit-task').on("submit", function(event){
  //   console.log("Deleting a Task");
  //   event.preventDefault();
  //   let urlPost = $(this).attr('action');
  //   let task = $(this).serialize();
  //   // $.ajax('/tweets', { method: 'GET' })
  //   // .then(function(tweets) {
  //   //   // render function call for you
  //   //   renderTweets(tweets);
  //   // });
  //   $.ajax({
  //     type: "",
  //     url : urlPost,
  //     data : task,
  //     success : function(){//need to add function which will render added task to respective category
  //     }
  //   });
  // });
// });
