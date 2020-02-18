$(document).ready( function () {

  console.log("animations");


  $('.scrollDownButton').click(function(ele){

    console.log($(event.target).closest('.section').next('.section'));

    $(event.target).closest('.section').next('.section').ScrollTo({
          duration: 1500,
          easing: 'swing'
        })    
  })
  
  $('#scrollDown1').delay( 500 ).fadeIn('slow ');
});
