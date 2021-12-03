
$(document).ready(function() {

  //Shows the popup display
  //This can also handle getting the card information
  $('.card').click(function() {
    const taskId = $(this).attr('id');//tasks
    const url = `/tasks/${taskId}`;
    $.ajax({
      url: url,
      method: "GET"
    })
    .then((tasks) => {
      // alert(tasks[0]['id']);
      $('#taskName').val(tasks[0]['taskname']);
      $('#is_done').val(tasks[0]['is_done'])
    });
    
    $('#modal').css('display', 'block');
  })

  //Clears the popup block
  $('#close').click(function() {
    $('#modal').css('display', 'none');

  })

  // HANDLES DELETE
  $('.category').on('click', '#delete', function() {
    const id_parent = $( this ).parent().attr("id");
    $(`#${id_parent}`).hide();
    const url = `/tasks/${id_parent}`
    $.ajax({
      url:url, 
      method: "DELETE"
      })
    .done(function(){
      
    })
    console.log('DELETE');
  })


});
