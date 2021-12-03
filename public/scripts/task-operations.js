$(document).ready(function() {
  // const loadCards = require("./app");
  //  const isValid = function () {
  //   const text = $("#content").first().val();
  //   // error for no data pass
  //   if (text === "") {
  //     $(".error").text("please enter some textÍ");
  //     $(".error").slideDown("slow");
  //     // $(".error").show();
  //     return true;
  //  }
  //  if (text.length > 255) {
  //   $(".error").text("length is to longÍ");
  //   $(".error").slideDown("slow");
  //   return true;
  //   }
  // }
  // $('#formList').on("submit", function(event){
  //   // alert("in form submit");

  //   event.stopImmediatePropagation();
  //   event.preventDefault();

  //  if(isValid()){
  //    return;
  //  };
  //   let urlPost = $(this).attr('action');
  //   let task = $(this).serialize();
  //   console.log("check task",task);

  //   $.post(urlPost, task, function(){})
  //   .done(function(){
  //     $("#formList").trigger("reset");
  //     $(".error").hide();
  //     location.reload(true);
  //   })
  // });

  // // edit task//////
  // $('#popupForm').on("submit", function (event) {
  //   event.stopImmediatePropagation();
  //   event.preventDefault();
  //   let urlPost = $(this).attr('action');
  //   let task = $('#popupForm').serialize();
  //   $.ajax({
  //     type: "PUT",
  //     url: urlPost,
  //     data: task,
  //     success: function () {
  //       $('#modal').css('display', 'none');
  //       location.reload(true);
  //     }
  //   });
  // });
});



// $(document).ready(function () {

//     // const { loadCards } = require("./app");
//     const isValid = function () {
//       const text = $("#content").first().val();
//       // error for no data pass
//       if (text === "") {
//         $(".error").text("please enter some textÍ");
//         $(".error").slideDown("slow");
//         // $(".error").show();
//         return true;
//       }
//       if (text.length > 255) {
//         $(".error").text("length is to longÍ");
//         $(".error").slideDown("slow");
//         return true;
//       }
//     }
    
//     $('#formList').on("submit", function (event) {
//       event.stopImmediatePropagation();
//       event.preventDefault();

//       if (isValid()) {
//         return;
//       };
//       let urlPost = $(this).attr('action');
//       let task = $(this).serialize();
//       $.post(urlPost, task, function () { })
//         .done(function () {
//         })