$(document).ready(function() {
  console.log("Adding Task");
  $('#formList').on("submit", function(event){
    event.preventDefault();
    let urlPost = $(this).attr('action');
    let task = $(this).serialize();
    $.ajax({
      type: "POST",
      url : urlPost,
      data : task,
      success : function(){//need to add function which will render added task to respective category
      }
    });
  });


  // edit task//////
  $('#edit-task').on("submit", function(event){
    console.log("Editing a Task");
    event.preventDefault();
    let urlPost = $(this).attr('action');
    let task = $(this).serialize();
    $.ajax({
      type: "PUT",
      url : urlPost,
      data : task,
      success : function(){//need to add function which will render added task to respective category
      }
    });
  });

  //delete the task
  $('#edit-task').on("submit", function(event){
    console.log("Deleting a Task");
    event.preventDefault();
    let urlPost = $(this).attr('action');
    let task = $(this).serialize();
    $.ajax({
      type: "DELETE",
      url : urlPost,
      data : task,
      success : function(){//need to add function which will render added task to respective category
      }
    });
  });
});