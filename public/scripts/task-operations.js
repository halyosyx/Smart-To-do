$(document).ready(function() {
  
  $('#formList').on("submit", function(event){
    event.preventDefault();
    let urlPost = $(this).attr('action');
    let task = $(this).serialize();
    $.post(urlPost, task, function(){})
    .done(function(){})
    //{
    //   type: "POST",
    //   url : urlPost,
    //   data : task,
    //   success : function(){//need to add function which will render added task to respective category
        
    //   }
    // });
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
  //   $.ajax({
  //     type: "DELETE",
  //     url : urlPost,
  //     data : task,
  //     success : function(){//need to add function which will render added task to respective category
  //     }
  //   });
  // });
});