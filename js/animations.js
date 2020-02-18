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

  // $('#scrollDown1').click( function(){
  //   $('#section2').ScrollTo({
  //     duration: 1500,
  //     easing: 'swing'
  //   });
  // });

  // $('#scrollDown2').click( function(){
  //   $('#section3').ScrollTo({
  //     duration: 1500,
  //     easing: 'swing'
  //   });
  // });

  // $('#scrollDown3').click( function(){
  //   $('#section4').ScrollTo({
  //     duration: 1500,
  //     easing: 'swing'
  //   });
  // });

  // $('#scrollDown4').click( function(){
  //   $('#section5').ScrollTo({
  //     duration: 1500,
  //     easing: 'swing'
  //   });
  // });

  // $('#scrollDown5').click( function(){
  //   $('#section6').ScrollTo({
  //     duration: 1500,
  //     easing: 'swing'
  //   });
  // });
  // $('#scrollDown6').click( function(){
  //   $('#section6').ScrollTo({
  //     duration: 1500,
  //     easing: 'swing'
  //   });
  // });


});
